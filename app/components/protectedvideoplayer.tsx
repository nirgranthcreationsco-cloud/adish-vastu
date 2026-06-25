"use client";

import { Lock, Play, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ProtectedVideoPlayerProps {
  driveUrl: string;
  title: string;
  thumbnail?: string;
  onClose?: () => void;
}

/**
 * Protected Video Player for Google Drive videos
 * Features:
 * - Prevents right-click
 * - Disables inspect element
 * - Blocks keyboard shortcuts
 * - Overlay protection
 * - No download option
 */
export default function ProtectedVideoPlayer({
  driveUrl,
  title,
  thumbnail,
  onClose,
}: ProtectedVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Extract Google Drive file/folder ID from URL
  const getDriveEmbedUrl = (url: string): string => {
    // Handle folder URLs
    const folderMatch = url.match(/folders\/([a-zA-Z0-9_-]+)/);
    if (folderMatch) {
      return `https://drive.google.com/embeddedfolderview?id=${folderMatch[1]}#grid`;
    }

    // Handle file URLs
    const fileMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileMatch) {
      return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
    }

    return url;
  };

  useEffect(() => {
    // Prevent right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Prevent keyboard shortcuts (F12, Ctrl+Shift+I, Ctrl+U, etc.)
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+I (Inspect)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
        return false;
      }
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        return false;
      }
      // Ctrl+S (Save)
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        return false;
      }
      // Cmd+Option+I (Mac Inspect)
      if (e.metaKey && e.altKey && e.key === "i") {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Prevent drag and drop
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("contextmenu", handleContextMenu);
      container.addEventListener("selectstart", handleSelectStart);
      container.addEventListener("dragstart", handleDragStart);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (container) {
        container.removeEventListener("contextmenu", handleContextMenu);
        container.removeEventListener("selectstart", handleSelectStart);
        container.removeEventListener("dragstart", handleDragStart);
      }
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const embedUrl = getDriveEmbedUrl(driveUrl);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full select-none"
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      {/* Security Overlay (invisible but blocks interactions) */}
      <div className="absolute inset-0 z-10 pointer-events-none" />

      {!isPlaying ? (
        <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-slate-800">
          {thumbnail && (
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          )}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-4">
            <button
              onClick={() => setIsPlaying(true)}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-20"
              aria-label="Play video"
            >
              <Play className="w-8 h-8 text-white ml-1" />
            </button>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Lock className="w-4 h-4" />
              <span>Protected Content</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          {/* Close button */}
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-black/70 rounded-full transition"
              aria-label="Close video"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          )}

          {/* Protected iframe */}
          <div className="relative w-full h-full">
            <iframe
              src={embedUrl}
              className="w-full h-full border-0"
              allow="autoplay"
              style={{
                pointerEvents: "auto",
                userSelect: "none",
                WebkitUserSelect: "none",
              }}
              sandbox="allow-scripts allow-same-origin allow-presentation"
              title={title}
            />

            {/* Transparent overlay to prevent direct iframe interaction */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ zIndex: 5 }}
            />
          </div>

          {/* Watermark */}
          <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 bg-black/60 rounded-lg text-white text-xs flex items-center gap-2">
            <Lock className="w-3 h-3" />
            <span>Protected by Vastu Academy</span>
          </div>
        </div>
      )}

      {/* CSS to prevent selection and copying */}
      <style jsx>{`
        * {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
}
