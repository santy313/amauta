const drive = require("../config/googleDrive");
const fs = require("fs");

const createFolder = async (folderName, parentFolderId = null) => {
  const fileMetadata = {
    name: folderName,
    mimeType: "application/vnd.google-apps.folder",
    parents: parentFolderId ? [parentFolderId] : [],
  };

  const response = await drive.files.create({
    resource: fileMetadata,
    fields: "id",
  });

  return response.data.id;
};

const uploadFile = async (filePath, fileName, parentFolderId) => {
  const fileMetadata = {
    name: fileName,
    parents: [parentFolderId],
  };

  const media = {
    mimeType: "application/octet-stream",
    body: fs.createReadStream(filePath),
  };

  const response = await drive.files.create({
    resource: fileMetadata,
    media,
    fields: "webViewLink",
  });

  return response.data.webViewLink;
};

module.exports = { createFolder, uploadFile };
