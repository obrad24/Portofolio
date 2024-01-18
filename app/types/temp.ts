import { StaticImageData } from "next/image";

export type Temp = {
   title: string,
    description :string,
    tags: readonly string[],
    imageUrl: StaticImageData,
}