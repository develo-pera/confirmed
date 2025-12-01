import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const URL_PATTERN = {
  s3: `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.us-east-1.amazonaws.com/`,
  x: /^(https?:\/\/)?(www\.)?x\.com\//i,
  instagram: /^(https?:\/\/)?(www\.)?instagram\.com\//i,
  linkedin: /^(https?:\/\/)?(www\.)?linkedin\.com\/in\//i,
  github: /^(https?:\/\/)?(www\.)?github\.com\//i,
  farcaster: /^(https?:\/\/)?(www\.)?farcaster\.xyz\//i,
  website: /^(https?:\/\/)?(www\.)?/i,
}

export const URL_PREFIX = {
  s3: `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.us-east-1.amazonaws.com/`,
  x: "https://x.com/",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/in/",
  github: "https://github.com/",
  farcaster: "https://farcaster.xyz/",
  website: "https://",
}

export const stripUrl = (url: string, pattern: string | RegExp) => {
  return url.replace(pattern, "");
}

export const addUrlPrefix = (url: string, prefix: string) => {
  return `${prefix}${url}`;
}

export const uploadFileToS3 = async (file: File, folder: string): Promise<{ s3Url: string, fullPath: string }> => {
  if (!process.env.NEXT_PUBLIC_AWS_BUCKET_NAME || !process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || !process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY) {
    throw new Error("AWS credentials are not set");
  }

  if (!(file instanceof File)) {
    throw new Error("Invalid file: expected File instance");
  }

  const s3 = new S3Client({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    },
  });

  // Convert File to ArrayBuffer to avoid stream issues with AWS SDK
  const arrayBuffer = await file.arrayBuffer();

  // Generate a unique filename to avoid conflicts
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 15);
  const fileExtension = file.name.split('.').pop();
  const fileName = `${timestamp}-${randomString}.${fileExtension}`;

  const fullPath = `${folder}/${fileName}`;

  const command = new PutObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
    Key: fullPath,
    Body: new Uint8Array(arrayBuffer),
    ContentType: file.type,
  });

  try {
    const response = await s3.send(command);
    console.log("Uploaded file to S3", response);
    // Return the S3 URL
    const s3Url = `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.us-east-1.amazonaws.com/${fullPath}`;
    return {
      s3Url,
      fullPath,
    };
  } catch (e) {
    console.error("Error uploading file", e);
    throw e;
  }
};