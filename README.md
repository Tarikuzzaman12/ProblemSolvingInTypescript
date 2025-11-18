1..Interface এবং Type-এর পার্থক্য 

TypeScript-এ interface এবং type উভয়ই ডেটা স্ট্রাকচার বা object-এর আকার বর্ণনা করতে ব্যবহৃত হয়। প্রথম দৃষ্টিতে এদেরকে খুব কাছাকাছি মনে হলেও এদের মধ্যে কিছু গুরুত্বপূর্ণ ব্যবহারিক পার্থক্য রয়েছে:

Interface :
একই নামের একাধিক interface ডিক্লেয়ার করলে TypeScript সেগুলিকে স্বয়ংক্রিয়ভাবে একত্রিত করে।এটি অন্য interface এবং type উভয়কেই extends কিওয়ার্ডের মাধ্যমে এক্সটেন্ড করতে পারে।এটি মূলত Object-এর shape এবং Class-এর কাঠামো সংজ্ঞায়িত করার জন্য ব্যবহৃত হয়।interface একটি primitive type-এর জন্য alias তৈরি করতে পারে না।

Type:
Type-এ  Declaration Merging সম্ভব নয়। একই নামের একাধিক type ডিক্লেয়ার করলে TypeScript Error দেখাবে।এটি অন্য type বা interface এক্সটেন্ড করার জন্য & অপারেটর ব্যবহার করে।এটি Object-এর আকার সংজ্ঞায়িত করতে পারে।Type primitive types-এর জন্য alias তৈরি করতে পারে।


2.TypeScript-এ keyof কীওয়ার্ডের ব্যবহার:
keyof কিওয়ার্ডটি TypeScript-এ Type Safety নিশ্চিত করার জন্য একটি অত্যন্ত শক্তিশালী টুল বিশেষ করে যখন কোনো Object-এর Property-কে ডায়নামিকভাবে অ্যাক্সেস করতে হয়।keyof অপারেটরটি একটি নির্দিষ্ট Object Type-এর সমস্ত Public Property Key নিয়ে গঠিত একটি Union Type তৈরি করে।keyof-এর প্রধান কাজ হলো প্রোগ্রামারকে নিশ্চিত করা যে তারা কোনো object-এর Property অ্যাক্সেস করার সময় শুধুমাত্র সেই object-এ বিদ্যমান Property Key গুলিই ব্যবহার করছে। 

Example:

type Product = {
 <!-- এই Type-এর Keys গুলি হলো: 'id' | 'name' | 'price' | 'inStock' -->
id: number;
name: string;
price: number;
inStock: boolean;
};

// keyof Product ব্যবহার করে আমরা একটি Union Type তৈরি করি:
<!-- 'id' | 'name' | 'price' | 'inStock' -->
type ProductKey = keyof Product; 

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
return obj[key];
}


const laptop: Product = {
id: 401,
name: "XPS 13",
price: 1500,
inStock: true,
};

const productName: string = getProperty(laptop, 'name');
<!-- output :XPS 13 -->






