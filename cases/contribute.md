# Contribution Guide

Thank you for contributing to the **Privacy Builder Pack**! This guide will help you add new use local privacy cases to the [`cases`](https://github.com/web3privacy/privacy-builder-pack/tree/main/cases) section of the repository.

## How to Contribute

**1. Fork the Repository**

Click the "Fork" button at the top right of the repository page to create your own copy.

**2. Clone Your Fork**

Open your terminal and run:
```bash
    git clone https://github.com/your-username/privacy-builder-pack.git
    cd privacy-builder-pack/cases
```
**3. Add or Edit a Country File**

- To add a new country: create a new file named `country.md` (e.g., `france.md`) in the `cases/` folder.  
- To add a use case to an existing country: open the existing `country.md` file and append your use case.

**4. Use the Following Format**

    "# + (order number) + Name of the Use Case"
    Brief description of the use case.

*Example:*

    # 1 Decentralized Identity for Healthcare
    Patients use self-sovereign IDs to access and control medical records across providers.

**5. Commit and Push Changes**

```bash
    git add cases/
    git commit -m "Add use case for [country]"
    git push origin main
```
**6. Open a Pull Request**

Go to your fork on GitHub, click “Compare & pull request,” and submit it for review.

---

If you have questions or want feedback before submitting, feel free to open an issue. Thanks for helping build a privacy-first future!
