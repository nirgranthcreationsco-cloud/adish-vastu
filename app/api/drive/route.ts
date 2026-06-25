import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const FOLDER_ID = '13s3neeQXdRB1xjS3eSTxoibIzN9xTP2C';

// Mock data for testing without API key - MATCHES YOUR ACTUAL GOOGLE DRIVE FOLDERS
const MOCK_CATEGORIES = [
    { id: 'mock-1', name: 'Gem Stone', mimeType: 'application/vnd.google-apps.folder' },
    { id: 'mock-2', name: 'Stone Bracelets', mimeType: 'application/vnd.google-apps.folder' },
    { id: 'mock-3', name: 'Vastu Remedies', mimeType: 'application/vnd.google-apps.folder' },
    { id: 'mock-4', name: 'Vastu Statue', mimeType: 'application/vnd.google-apps.folder' },
];

const MOCK_PRODUCTS: Record<string, any[]> = {
    'mock-1': [ // Gem Stone
        { id: 'p1', name: 'Ruby Gemstone', mimeType: 'image/jpeg', thumbnailLink: '/prod1.png' },
        { id: 'p2', name: 'Emerald Stone', mimeType: 'image/jpeg', thumbnailLink: '/prod2.png' },
        { id: 'p3', name: 'Blue Sapphire', mimeType: 'image/jpeg', thumbnailLink: '/prod3.png' },
        { id: 'p4', name: 'Yellow Sapphire', mimeType: 'image/jpeg', thumbnailLink: '/prod4.png' },
        { id: 'p5', name: 'Pearl (Moti)', mimeType: 'image/jpeg', thumbnailLink: '/prod1.png' },
        { id: 'p6', name: 'Red Coral (Moonga)', mimeType: 'image/jpeg', thumbnailLink: '/prod2.png' },
        { id: 'p7', name: 'Hessonite (Gomed)', mimeType: 'image/jpeg', thumbnailLink: '/prod3.png' },
        { id: 'p8', name: "Cat's Eye (Lehsunia)", mimeType: 'image/jpeg', thumbnailLink: '/prod4.png' },
        { id: 'p9', name: 'Diamond', mimeType: 'image/jpeg', thumbnailLink: '/prod1.png' },
        { id: 'p10', name: 'Opal Stone', mimeType: 'image/jpeg', thumbnailLink: '/prod2.png' },
    ],
    'mock-2': [ // Stone Bracelets
        { id: 'p11', name: 'Tiger Eye Bracelet', mimeType: 'image/jpeg', thumbnailLink: '/prod4.png' },
        { id: 'p12', name: 'Rose Quartz Bracelet', mimeType: 'image/jpeg', thumbnailLink: '/prod1.png' },
        { id: 'p13', name: 'Amethyst Bracelet', mimeType: 'image/jpeg', thumbnailLink: '/prod2.png' },
        { id: 'p14', name: 'Black Tourmaline Bracelet', mimeType: 'image/jpeg', thumbnailLink: '/prod3.png' },
        { id: 'p15', name: 'Citrine Bracelet', mimeType: 'image/jpeg', thumbnailLink: '/prod4.png' },
        { id: 'p16', name: 'Lapis Lazuli Bracelet', mimeType: 'image/jpeg', thumbnailLink: '/prod1.png' },
        { id: 'p17', name: 'Hematite Bracelet', mimeType: 'image/jpeg', thumbnailLink: '/prod2.png' },
        { id: 'p18', name: 'Jade Bracelet', mimeType: 'image/jpeg', thumbnailLink: '/prod3.png' },
        { id: 'p19', name: 'Carnelian Bracelet', mimeType: 'image/jpeg', thumbnailLink: '/prod4.png' },
        { id: 'p20', name: 'Moonstone Bracelet', mimeType: 'image/jpeg', thumbnailLink: '/prod1.png' },
        { id: 'p21', name: 'Labradorite Bracelet', mimeType: 'image/jpeg', thumbnailLink: '/prod2.png' },
        { id: 'p22', name: 'Turquoise Bracelet', mimeType: 'image/jpeg', thumbnailLink: '/prod3.png' },
    ],
    'mock-3': [ // Vastu Remedies
        { id: 'p23', name: 'Sri Yantra', mimeType: 'image/jpeg', thumbnailLink: '/prod3.png' },
        { id: 'p24', name: 'Crystal Pyramid', mimeType: 'image/jpeg', thumbnailLink: '/prod4.png' },
        { id: 'p25', name: 'Navagraha Set', mimeType: 'image/jpeg', thumbnailLink: '/prod1.png' },
        { id: 'p26', name: 'Vastu Compass', mimeType: 'image/jpeg', thumbnailLink: '/prod2.png' },
        { id: 'p27', name: 'Feng Shui Coins', mimeType: 'image/jpeg', thumbnailLink: '/prod3.png' },
        { id: 'p28', name: 'Salt Lamp', mimeType: 'image/jpeg', thumbnailLink: '/prod4.png' },
        { id: 'p29', name: 'Wind Chimes', mimeType: 'image/jpeg', thumbnailLink: '/prod1.png' },
        { id: 'p30', name: 'Tortoise Figurine', mimeType: 'image/jpeg', thumbnailLink: '/prod2.png' },
        { id: 'p31', name: 'Laughing Buddha', mimeType: 'image/jpeg', thumbnailLink: '/prod3.png' },
        { id: 'p32', name: 'Money Plant', mimeType: 'image/jpeg', thumbnailLink: '/prod4.png' },
        { id: 'p33', name: 'Bamboo Plant', mimeType: 'image/jpeg', thumbnailLink: '/prod1.png' },
        { id: 'p34', name: 'Dream Catcher', mimeType: 'image/jpeg', thumbnailLink: '/prod2.png' },
        { id: 'p35', name: 'Evil Eye Protection', mimeType: 'image/jpeg', thumbnailLink: '/prod3.png' },
        { id: 'p36', name: 'Incense Holder', mimeType: 'image/jpeg', thumbnailLink: '/prod4.png' },
        { id: 'p37', name: 'Copper Kalash', mimeType: 'image/jpeg', thumbnailLink: '/prod1.png' },
    ],
    'mock-4': [ // Vastu Statue
        { id: 'p38', name: 'Ganesha Statue', mimeType: 'image/jpeg', thumbnailLink: '/prod1.png' },
        { id: 'p39', name: 'Lakshmi Statue', mimeType: 'image/jpeg', thumbnailLink: '/prod2.png' },
        { id: 'p40', name: 'Saraswati Statue', mimeType: 'image/jpeg', thumbnailLink: '/prod3.png' },
        { id: 'p41', name: 'Shiva Statue', mimeType: 'image/jpeg', thumbnailLink: '/prod4.png' },
        { id: 'p42', name: 'Krishna Statue', mimeType: 'image/jpeg', thumbnailLink: '/prod1.png' },
        { id: 'p43', name: 'Hanuman Statue', mimeType: 'image/jpeg', thumbnailLink: '/prod2.png' },
        { id: 'p44', name: 'Buddha Statue', mimeType: 'image/jpeg', thumbnailLink: '/prod3.png' },
        { id: 'p45', name: 'Durga Statue', mimeType: 'image/jpeg', thumbnailLink: '/prod4.png' },
        { id: 'p46', name: 'Radha Krishna Statue', mimeType: 'image/jpeg', thumbnailLink: '/prod1.png' },
        { id: 'p47', name: 'Nataraja Statue', mimeType: 'image/jpeg', thumbnailLink: '/prod2.png' },
        { id: 'p48', name: 'Vishnu Statue', mimeType: 'image/jpeg', thumbnailLink: '/prod3.png' },
        { id: 'p49', name: 'Parvati Statue', mimeType: 'image/jpeg', thumbnailLink: '/prod4.png' },
        { id: 'p50', name: 'Kuber Statue', mimeType: 'image/jpeg', thumbnailLink: '/prod1.png' },
    ],
};

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const folderId = searchParams.get('folderId') || FOLDER_ID;

        // Check if service account file exists
        let useServiceAccount = false;
        let serviceAccountPath = '';

        try {
            const fs = require('fs');
            const path = require('path');
            serviceAccountPath = path.join(process.cwd(), 'google-service-account.json');

            if (fs.existsSync(serviceAccountPath)) {
                useServiceAccount = true;
            }
        } catch (err) {
            console.log('⚠️  Service account file not found, checking for API key...');
        }

        // Check if API key is configured (fallback)
        const apiKey = process.env.GOOGLE_DRIVE_API_KEY;

        if (!useServiceAccount && (!apiKey || apiKey === 'YOUR_API_KEY_HERE')) {
            console.log('⚠️  Using mock data - No Google Drive credentials configured');

            // Return mock data
            if (folderId === FOLDER_ID) {
                return NextResponse.json({
                    success: true,
                    items: MOCK_CATEGORIES,
                    isMock: true,
                });
            } else {
                // Return mock products for a specific category
                const products = MOCK_PRODUCTS[folderId] || [];
                return NextResponse.json({
                    success: true,
                    items: products,
                    isMock: true,
                });
            }
        }

        // Use real Google Drive API
        let drive;

        if (useServiceAccount) {
            // Use Service Account (RECOMMENDED - more secure, no quota limits)
            console.log('✅ Using Service Account authentication');
            const { JWT } = require('google-auth-library');
            const fs = require('fs');

            const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

            const jwtClient = new JWT({
                email: serviceAccount.client_email,
                key: serviceAccount.private_key,
                scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            });

            drive = google.drive({
                version: 'v3',
                auth: jwtClient,
            });
        } else {
            // Use API Key (fallback)
            console.log('⚠️  Using API Key authentication (consider using Service Account instead)');
            drive = google.drive({
                version: 'v3',
                auth: apiKey,
            });
        }

        // Fetch ALL folders/files from the specified folder with pagination
        let allFiles: any[] = [];
        let pageToken: string | undefined = undefined;

        do {
            const response: any = await drive.files.list({
                q: `'${folderId}' in parents and trashed=false`,
                fields: 'nextPageToken, files(id, name, mimeType, thumbnailLink, webViewLink, webContentLink, imageMediaMetadata)',
                orderBy: 'name',
                pageSize: 1000, // Maximum allowed by Google Drive API
                pageToken: pageToken,
            });

            if (response.data.files) {
                allFiles = allFiles.concat(response.data.files);
            }

            pageToken = response.data.nextPageToken || undefined;
        } while (pageToken);

        console.log(`✅ Fetched ${allFiles.length} items from folder ${folderId}`);

        return NextResponse.json({
            success: true,
            items: allFiles,
            isMock: false,
            totalCount: allFiles.length,
        });
    } catch (error: any) {
        console.error('❌ Google Drive API Error:', error);
        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Failed to fetch Google Drive data',
            },
            { status: 500 }
        );
    }
}
