"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { Check, Loader2 } from "lucide-react";

import { unsplash } from "@/lib/unsplash";
import { cn } from "@/lib/utils";
import { defaultImages } from "@/constants/images";
import Link from "next/link";
import { FormErrors } from "./form-errors";

interface FormPickerProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

export const FormPicker = ({ id, errors }: FormPickerProps) => {
  const { pending } = useFormStatus();

  const [images, setImages] = useState<Array<Record<string, any>>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await unsplash.photos.getRandom({
          collectionIds: ["317099"],
          count: 9,
        });

        if (result && result.response) {
          const resultImages = result.response as Array<Record<string, any>>;
          setImages(resultImages);
        } else {
          console.log("Images Has Error");
        }
      } catch (error) {
        console.log(error);
        setImages(defaultImages);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (isLoading)
    return (
      <div className="p-6 flex items-center justify-center">
        <Loader2 className="h-6 w-6 text-sky-700 animate-spin" />
      </div>
    );

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-2 mb-2">
        {images?.map((image) => (
          <div
            key={image.id}
            className={cn(
              "cursor-pointer relative aspect-video group hover:opacity-75 transition bg-muted",
              pending && "opacity-50 hover:opacity-50 cursor-auto"
            )}
            onClick={() => {
              if (pending) return;
              setSelectedImage(image.id);
            }}
          >
            <input
              type="radio"
              name={id}
              id={id}
              className="hidden"
              checked={selectedImage === image.id}
              disabled={pending}
              value={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`}
            />
            <Image
              fill
              src={image.urls.thumb}
              alt="unsplash image"
              className="object-cover rounded-sm"
            />
            {selectedImage === image.id && (
              <div className="absolute inset-y-0 h-full w-full bg-black/50 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
            <Link
              href={image.links.html}
              target="_blank"
              className="px-1 opacity-0 group-hover:opacity-100 absolute bottom-0 w-full text-[10px] truncate text-white hover:underline bg-black/50"
            >
              {image.user.name}
            </Link>
          </div>
        ))}
      </div>

      <FormErrors id="image" errors={errors} />
    </div>
  );
};
