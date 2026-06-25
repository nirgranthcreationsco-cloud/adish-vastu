# 🔐 Service Account Setup - FINAL STEP!

## ✅ What We've Done

1. ✅ Copied your service account file to the project
2. ✅ Added it to `.gitignore` for security
3. ✅ Updated the API to use service account authentication
4. ✅ Installed required packages

## 🚨 CRITICAL: Share Your Drive Folder with Service Account

**You MUST do this step for it to work!**

### Step 1: Find Your Service Account Email

Run this command to see your service account email:

```bash
cat google-service-account.json | grep client_email
```

It will look something like:
```
"client_email": "vastu-drive@vastu-website.iam.gserviceaccount.com"
```

### Step 2: Share Your Google Drive Folder

1. **Open Google Drive**: https://drive.google.com/
2. **Navigate to your folder**: `13s3neeQXdRB1xjS3eSTxoibIzN9xTP2C`
3. **Right-click** on the folder → **Share**
4. **Add the service account email** (the one from Step 1)
5. **Set permission to "Viewer"**
6. **Click "Send"** (uncheck "Notify people" - it's a service account, not a person)

### Step 3: Share ALL Subfolders Too!

Repeat the same process for each of your 4 category folders:
- Gem Stone
- Stone Bracelets
- Vastu Remedies
- Vastu Statue

**OR** if you shared the parent folder with "Viewer" access, the subfolders should inherit the permissions automatically.

### Step 4: Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

### Step 5: Test It!

1. **Refresh your browser**
2. **Check the console** - you should see:
   ```
   ✅ Using Service Account authentication
   ✅ Fetched X items from folder...
   ```
3. **No more "Development Mode" banner!**
4. **Your actual folder names and products should appear!**

## 🎯 What Happens Now

The system will:
- ✅ Use service account (more secure than API key)
- ✅ Fetch your actual 4 folder names from Google Drive
- ✅ Fetch ALL images from each folder when you click on a category
- ✅ Display them as products with real images
- ✅ No quota limits!
- ✅ No need for public folder access!

## 🔍 Troubleshooting

### "Permission denied" or "File not found" errors

**Solution**: Make sure you shared the folder with the service account email

### Still seeing mock data

**Solution**: 
1. Check that `google-service-account.json` exists in your project root
2. Restart the dev server
3. Check browser console for error messages

### "Service account file not found"

**Solution**: Make sure the file is named exactly `google-service-account.json` in your project root

## 📝 Quick Command Reference

```bash
# View service account email
cat google-service-account.json | grep client_email

# Restart dev server
npm run dev

# Check if file exists
ls -la google-service-account.json
```

## 🎉 Benefits of Service Account vs API Key

✅ **More Secure**: Private key instead of public API key
✅ **No Quota Limits**: Higher rate limits
✅ **No Public Access Needed**: Folders can be private
✅ **Better for Production**: Industry standard for server-to-server auth
✅ **Granular Permissions**: Can control exactly what the service account can access

---

**Next Step**: Share your Google Drive folder with the service account email, then restart your dev server!
