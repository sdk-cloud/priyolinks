# ঐতিহ্য — ইসলামের ইতিহাস ও সংস্কৃতি

বাংলা ভাষায় ইসলামের ইতিহাস, সভ্যতা, শিল্প, স্থাপত্য ও সংস্কৃতি পরিচিত করানোর জন্য তৈরি responsive static website।

## পেজসমূহ
- `index.html` — বাংলা হোমপেজ
- `articles.html` — বিষয়ভিত্তিক বাংলা প্রবন্ধ পাঠাগার ও সূত্রের লিংক
- `gallery.html` — ইসলামি শিল্প ও স্থাপত্যের নকশাভিত্তিক গ্যালারি placeholder
- `en.html` — English introduction
- `admin.html` — local-only draft editor demo

## চালু করার নিয়ম
- `index.html` ফাইলটি ব্রাউজারে খুললেই সাইট দেখা যাবে।
- GitHub Pages চালু করতে repository-এর **Settings → Pages → Build and deployment** থেকে **Deploy from a branch** নির্বাচন করুন, branch হিসেবে `main` এবং folder হিসেবে `/ (root)` দিন, তারপর Save করুন।
- প্রকাশিত হলে GitHub Pages-এর URL হবে: `https://sdk-cloud.github.io/priyolinks/` (Pages সেটিংস সম্পন্ন ও deployment সফল হলে)।

## সম্পাদক ড্যাশবোর্ড সম্পর্কে
`admin.html` শুধুমাত্র ব্রাউজারের localStorage-এ খসড়া রাখে। এটি নিরাপদ admin login নয়, কোনো সার্ভারে তথ্য পাঠায় না এবং পাবলিক সাইটে নিবন্ধ প্রকাশ করে না। বাস্তব production CMS-এর জন্য authentication, server-side authorization, database, validation ও backup প্রয়োজন। এই demo-তে কোনো password বা secret রাখা যাবে না।

## তথ্য ও ছবি ব্যবহারের নীতি
প্রবন্ধগুলো পরিচিতিমূলক, পূর্ণাঙ্গ গবেষণা নয়। প্রকাশের আগে প্রতিটি ঐতিহাসিক তথ্য, তারিখ ও ব্যাখ্যা নির্ভরযোগ্য একাডেমিক/প্রাথমিক সূত্র দিয়ে যাচাই করুন। ছবি যোগ করার সময় লাইসেন্স, সংগ্রহশালা, আলোকচিত্রীর নাম ও সঠিক ক্যাপশন দিন। ঐতিহাসিক ব্যাখ্যার ভিন্নতা থাকলে তা স্পষ্টভাবে উল্লেখ করুন।

## প্রযুক্তি
Plain HTML, CSS ও JavaScript; কোনো build step বা package installation প্রয়োজন নেই।
