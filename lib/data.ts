import { client } from "@/app/lib/sanity";


export const getData = async (query: string, slug?:string) => {
    try {
        const data = await client.fetch(query);

        return data;
    } catch (error: any) {
        throw new Error(error.message);
        return;
    }
}

