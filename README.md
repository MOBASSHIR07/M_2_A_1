# TypeScript Blog Post

## ১. Type Alias এবং Type Interface এর মধ্যে পার্থক্য
**What are some differences between interfaces and types in TypeScript?**

Type Alias এবং Type Interface মূলত কোন ডাটার ধরন বলে দেওয়ার জন্য ব্যবহার করা হয়। এ দুটোই একই ধরনের কাজ করে, তবে এদের মধ্যে কিছুটা পরিবর্তন আছে।  

**Type Alias:**  
- যেকোন ধরনের primitive type, object, class, tuple, বা function এর ধরন নির্ধারণের জন্য ব্যবহার করা হয়।  
- এতে কোডের readability বাড়ে।  
- উদাহরণ:

```
type ID = string | number;
type Point = [number, number];
type Callback = (data: string) => void;
```
Type Interface:

একই ধরনের কাজ করে, তবে এটি শুধু object, class, বা function এর ধরন নির্ধারণের জন্য ব্যবহার করা হয়।

Interface declaration merging এবং extends সমর্থন করে।

উদাহরণ:
```
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  role: string;
}


```


৫. Union Type এবং Intersection Type এর ব্যবহার
Provide an example of using union and intersection types in TypeScript.

Union type এবং Intersection type মূলত কোন variable অথবা parameter কে কিছু privilege অথবা rules নির্ধারণ করে দেয়।

Union Types (|):

এই type কোন variable বা parameter কে multiple type গ্রহণের সুযোগ দেয়।

Union types শুধু variable নয়, function parameter, return type বা array element এর জন্যও ব্যবহার করা যেতে পারে।

উদাহরণ:
```
type ID = string | number;

let userId: ID;
userId = 123;    // সঠিক ধরন
userId = '123';  // সঠিক ধরন
// userId = true; // ভুল কারণ এটি boolean

```

অর্থ: এই ID type এর variable বা parameter string type এর value নিতে পারে নাহলে number type এর।

Intersection Type (&):

Intersection type কোন object এর ভিতরে must have condition প্রয়োগ করে।

এটি মূলত objects এর জন্য বেশি ব্যবহৃত হলেও, function বা অন্যান্য types এর জন্যও ব্যবহার করা যেতে পারে।

উদাহরণ:
```
type Person = { name: string; age: number };
type Employee = { role: string };

const staff: Person & Employee = {
  name: 'Sadik',
  age: 25,
  role: 'Developer'
};

```
যেহেতু staff এর type হলো Person এবং Employee এর সমষ্টি, তাই staff এর property গুলোর মধ্যে Person এবং Employee এর সকল type থাকতে হবে।
