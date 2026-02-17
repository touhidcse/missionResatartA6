# Mission Restart Assignment Q/A

1. **What is the difference between `null` and `undefined`?**

কোন কিছু ডিফাইন করা না থাকলে তা undefined. undefine এর টাইপ undefine . এইটা জাভাস্ক্রিপ্ট সেট করে দিয়েছে।

কিছু না থাকলে তা null, null এর টাইপ হল অবজেক্ট।

2. **What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?**

**`map()`** নতুন অ্যারে তৈরি করে । অ্যারেকে মডিফাই করে । **`forEach()`** কোন কিছু রিটার্ন

করে না। সাইড এফেক্ট।

3. **What is the difference between `==` and `===`?**

**`===`** প্রথমে টাইপ চেক করে, টাইপ ভিন্ন হলে ফলস রিটার্ন করে। টাইপ একই হলে মান চেক করে। মান একই হলে True মান ভিন্ন হলে False return করে।

**`==`** টাইপ কনভার্ট করে ফেলে। একটা স্ট্রিং অন্যটা নাম্বার হলে স্ট্রিংকে নাম্বারে কনভার্ট করে ফেলে, বুলিয়ান ও নাম্বার হলে বুলিয়ানকে নাম্বারে কনভার্ট করে ফেলে, স্ট্রিং ও বুলিয়ান হলে  বুলিয়ানকে কনভার্ট করে।

4. **What is the significance of `async`/`await` in fetching API data?**

**`async`/`await`** ব্যবহার না করলে .then ব্যবহার করতে হয়, চেইনিং করতে হয়, কোড মেইনটেইন কঠিন হয়ে যায়।

5. **Explain the concept of Scope in JavaScript (Global, Function, Block).** 

Global এর ভ্যারিয়েবল সবাই ব্যবহার করতে পারে। Function () এর ভিতরের ভ্যারিয়েবল শুধু ঐ ফাংশনই ব্যবহার করতে পারে । বাহির থেকে ব্যবহার করা যায় না। block { } এর ভিতরের ভ্যারিয়েবল শুধু ঐ block { } ব্যবহার করতে পারে । বাহির থেকে ব্যবহার করা যায় না।