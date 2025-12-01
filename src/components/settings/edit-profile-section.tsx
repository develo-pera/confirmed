"use client";

import { useState } from "react";
import { AtSign, Globe } from "lucide-react";
import { Input } from "../ui/input";
import AvatarUpload from "../common/upload-avatar";
import { InputGroup, InputGroupInput, InputGroupAddon } from "../ui/input-group";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { FileWithPreview } from "../ui/file-upload";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User } from "@/lib/definitions";
import { Button } from "../ui/button";
import InputError from "../common/input-error";
import { uploadFileToS3 } from "@/lib/helpers";
import { toast } from "sonner";
import { UseMutationResult } from "@tanstack/react-query";
import { stripUrl, URL_PATTERN } from "@/lib/helpers";
import { Label } from "@/components/ui/label";

const schema = z.object({
  avatar: z.union([z.string(), z.literal("")]).optional(),
  name: z.union([z.string().min(3, "Name must be at least 3 characters"), z.literal("")]).optional(),
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.email({ message: "Invalid email address" }),
  bio: z.string().optional(),
  website: z.union([z.url("Please enter a valid website URL").startsWith("https://", { message: "URL must start with https://" }), z.literal("")]).optional(),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  farcaster: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const EditProfileSection = ({ user, updateUser }: { user: User, updateUser: UseMutationResult<any, Error, any, unknown> }) => {
  const [avatar, setAvatar] = useState<FileWithPreview | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      avatar: user?.avatar || "",
      name: user?.name || "",
      username: user?.username || "",
      email: user?.email || "",
      bio: user?.bio || "",
      website: user?.website || "",
      twitter: user?.twitter || "",
      instagram: user?.instagram || "",
      linkedin: user?.linkedin || "",
      github: user?.github || "",
      farcaster: user?.farcaster || "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (avatar && avatar.file instanceof File) {
      const { fullPath } = await uploadFileToS3(avatar.file, `profile-photos/${user.id}`);
      data.avatar = fullPath;
    }

    const stripedUrl = user?.avatar?.replace(`https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.us-east-1.amazonaws.com/`, "");
    data.avatar = stripedUrl;

    try {
      const response = await updateUser.mutateAsync(data);
      console.log("response", response);

      toast.success("Profile updated successfully");
    } catch (error) {

      toast.error("Failed to update profile");
    }
  }

  return (
    <div className={cn(
      // "mb-10 border border-foreground/10 rounded-sm p-5 sm:p-10",
      // "bg-gradient-to-b from-muted/50 to-muted/10",
      // "hover:from-muted/60 hover:to-muted/20",
      // "transition-colors duration-300",
    )}>
      <h2 className="text-xl">Your Profile</h2>
      <p className="text-foreground/50 text-sm mb-5">Edit your profile information.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-2">
        <div className="flex flex-col sm:flex-row md:items-start gap-10 mb-5 md:max-w-[calc(50%-4px)]">
          <AvatarUpload className="h-[176px] flex items-center justify-center" onFileChange={(file) => {
            console.log("file", file);
            setAvatar(file);
          }} defaultAvatar={user?.avatar || undefined} />
          <div className="space-y-2 w-full">
            <Label className="block text-sm font-medium text-foreground/50 mb-1" htmlFor="name">Name</Label>
            <Input type="text" placeholder="Name" className="!bg-transparent" {...register("name")} aria-invalid={errors.name ? "true" : "false"} aria-describedby={errors.name ? errors.name.message : undefined} />
            <InputError error={errors.name} />
            <Label className="block text-sm font-medium text-foreground/50 mb-1" htmlFor="username">Username</Label>
            <InputGroup className="!bg-transparent" >
              <InputGroupInput type="text" placeholder="Username" {...register("username")} aria-invalid={errors.username ? "true" : "false"} aria-describedby={errors.username ? errors.username.message : undefined} />
              <InputGroupAddon>
                <AtSign />
              </InputGroupAddon>
            </InputGroup>
            <InputError error={errors.username} />
            <Label className="block text-sm font-medium text-foreground/50 mb-1" htmlFor="email">Email</Label>
            <Input type="text" placeholder="Email" className="!bg-transparent" {...register("email")} aria-invalid={errors.email ? "true" : "false"} aria-describedby={errors.email ? errors.email.message : undefined} />
            <InputError error={errors.email} />
          </div>
        </div>

        <Label className="block text-sm font-medium text-foreground/50 mb-1" htmlFor="bio">Bio</Label>
        <Textarea placeholder="Bio" className="!bg-transparent" {...register("bio")} />

        <p className="text-sm font-medium text-foreground/50 mb-1">Socials</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-2 mb-5">
          <div>
            <InputGroup className="!bg-transparent" >
              <InputGroupInput type="text" placeholder="Website" {...register("website")} aria-invalid={errors.website ? "true" : "false"} aria-describedby={errors.website ? errors.website.message : undefined} />
              <InputGroupAddon>
                <Globe />
              </InputGroupAddon>
            </InputGroup>
            <InputError error={errors.website} />
          </div>

          <InputGroup className="!bg-transparent" >
            <InputGroupInput type="text" placeholder="Twitter username" {...register("twitter", { setValueAs: (value) => stripUrl(value, URL_PATTERN.x) })} aria-invalid={errors.twitter ? "true" : "false"} aria-describedby={errors.twitter ? errors.twitter.message : undefined} />
            <InputGroupAddon>
              x.com/
            </InputGroupAddon>
          </InputGroup>

          <InputGroup className="!bg-transparent" >
            <InputGroupInput type="text" placeholder="Instagram username" {...register("instagram", { setValueAs: (value) => stripUrl(value, URL_PATTERN.instagram) })} />
            <InputGroupAddon>
              instagram.com/
            </InputGroupAddon>

          </InputGroup>

          <InputGroup className="!bg-transparent" >
            <InputGroupInput type="text" placeholder="LinkedIn username" {...register("linkedin", { setValueAs: (value) => stripUrl(value, URL_PATTERN.linkedin) })} />
            <InputGroupAddon>
              linkedin.com/in/
            </InputGroupAddon>
          </InputGroup>

          <InputGroup className="!bg-transparent" >
            <InputGroupInput type="text" placeholder="Github username" {...register("github", { setValueAs: (value) => stripUrl(value, URL_PATTERN.github) })} />
            <InputGroupAddon>
              github.com/
            </InputGroupAddon>
          </InputGroup>

          <InputGroup className="!bg-transparent" >
            <InputGroupInput type="text" placeholder="Farcaster username" {...register("farcaster", { setValueAs: (value) => stripUrl(value, URL_PATTERN.farcaster) })} />
            <InputGroupAddon>
              farcaster.xyz/
            </InputGroupAddon>
          </InputGroup>
        </div>
        <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save"}</Button>
      </form>
    </div>
  );
}

export default EditProfileSection;