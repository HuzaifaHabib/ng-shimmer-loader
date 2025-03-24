# 🚀 ng-shimmer-loader

**A lightweight Angular library to display a shimmer loading effect in your components.**  
Easily create elegant shimmer placeholders while your content loads.

<!-- ![Shimmer Loader Demo](https://raw.githubusercontent.com/your-repo-url/demo.gif) -->

---

## 📦 Installation

You can install the package using **npm**:

```sh
npm install ng-shimmer-loader
```

Or using **yarn**:

```sh
yarn add ng-shimmer-loader
```

---

## 🛠️ Usage

### **Import in Your Angular Module**

If your project uses **NgModules**, import `ShimmerLoaderModule`:

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ShimmerLoaderModule } from "ng-shimmer-loader";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShimmerLoaderModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

For **Standalone Components**, directly import `ShimmerLoaderComponent`:

```ts
import { Component } from "@angular/core";
import { ShimmerLoaderComponent } from "ng-shimmer-loader";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ShimmerLoaderComponent],
  template: ` <ng-shimmer-loader width="100px" height="20px"></ng-shimmer-loader> `,
})
export class AppComponent {}
```

---

## 🎨 Customization

You can customize the shimmer loader using the following **inputs**:

| Input Property      | Type     | Default Value | Description                           |
| ------------------- | -------- | ------------- | ------------------------------------- |
| `width`             | `string` | `"100%"`      | Sets the width of the shimmer loader  |
| `height`            | `string` | `"20px"`      | Sets the height of the shimmer loader |
| `borderRadius`      | `string` | `"4px"`       | Rounds the corners of the loader      |
| `animationDuration` | `string` | `"1.5s"`      | Controls shimmer animation speed      |
| `className`         | `string` | `""`          | Custom class for additional styling   |

### **Example Usage with Custom Styles**

```html
<ng-shimmer-loader width="200px" height="50px" borderRadius="8px" animationDuration="2s" className="custom-shimmer"> </ng-shimmer-loader>
```

### **Custom Styles (CSS)**

You can apply your own styles using the `className` input:

```css
.custom-shimmer {
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
}
```

---

## 🏗️ Development & Contribution

### **1. Clone the Repository**

```sh
git clone https://github.com/your-github/ng-shimmer-loader.git
cd ng-shimmer-loader
```

### **2. Install Dependencies**

```sh
npm install
```

### **3. Build the Library**

```sh
ng build shimmer-loader
```

### **4. Test Locally Before Publishing**

To test the package in another Angular project:

```sh
cd dist/shimmer-loader
npm link
```

In your test project:

```sh
npm link shimmer-loader
```

### **5. Unlink After Testing**

```sh
npm unlink shimmer-loader
npm install
```

---

## 📢 Contributing

We welcome contributions!

- Fork the repo
- Create a new branch (`feature/new-feature`)
- Submit a Pull Request 🚀

For major changes, open an issue first to discuss what you'd like to change.

---

## 📜 License

This project is licensed under the **MIT License**.  
Feel free to use and modify as needed.

---

## ✨ Support & Feedback

- ⭐ **Star the repository** if you found it useful!
- 🐞 **Report issues** [here](https://github.com/HuzaifaHabib/ng-shimmer-loader/issues)
- 💬 **Questions?** Open a discussion

---

### 🎉 Happy Coding! 🚀
