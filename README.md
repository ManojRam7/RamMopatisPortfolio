# Manoj Ram Mopati · Portfolio

Personal portfolio of Manoj Ram Mopati, Data Scientist in London.

**Live site:** https://manojram7.github.io/RamMopatisPortfolio/

## Pages

| Page | Content |
|---|---|
| `index.html` | Introduction, headline results, featured projects, certifications |
| `about.html` | Background, skills, education and certifications |
| `work-experience.html` | Roles at Tahir Group and Infosys |
| `projects.html` | All projects, with filters by area |
| `job-search-agent.html` | Case study of the Multi-LLM GenAI Job-Search Agent |
| `resume.html` | CV viewer and PDF download |
| `contact.html` | Contact details |

Two older page addresses (`home.html` and the previous case-study URL) redirect to their current pages.

Project cover images in `assets/projects/` are charts drawn from each project's own dataset.

## Built with

Plain HTML, CSS and JavaScript with no build step, hosted on GitHub Pages. Styles live in `css/styles.css`
(colours and spacing are CSS variables at the top of the file) and behaviour in `js/script.js`
(mobile menu, scroll animations and project filters). Each project card has its own colour theme
(`.t-*` classes).

## Running locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
