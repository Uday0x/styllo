# 🚀 Styllo CSS

A lightweight utility-first CSS engine that parses class names and applies styles dynamically at runtime.

---

## ✨ Features

* ⚡ Utility-first approach (like Tailwind)
* 🧠 Dynamic class parsing
* 🎯 No external CSS required
* 🔥 Lightweight & fast
* 🛠️ Built using pure JavaScript

---

## 📦 Installation

```bash
npm install styllo-css
```

---

## 🚀 Usage

### 1. Add utility classes in your HTML

```html
<p class="chai-p-10 chai-bg-yellow chai-center">
  Hello World
</p>
```

### 2. Initialize in JavaScript

```javascript
import init from "styllo-css";

init();
```

---

## 💡 Example

```html
<div class="chai-bg-black chai-text-white chai-p-20">
  Styllo is working 🚀
</div>
```

---

## 📌 Notes

* Make sure to call `init()` after your DOM is loaded
* Works best with simple utility class patterns

---

## 🤝 Contributing

Feel free to open issues or submit PRs to improve Styllo CSS.

---

## 📄 License

MIT License
