import os
import json

# Define paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJECTS_DIR = os.path.join(BASE_DIR, 'content', 'projects')
BLOG_DIR = os.path.join(BASE_DIR, 'content', 'blog')
PAGES_DIR = os.path.join(BASE_DIR, 'pages')
OUT_PROJECTS_DIR = os.path.join(PAGES_DIR, 'project')
OUT_BLOG_DIR = os.path.join(PAGES_DIR, 'post')

# Ensure output directories exist
os.makedirs(OUT_PROJECTS_DIR, exist_ok=True)
os.makedirs(OUT_BLOG_DIR, exist_ok=True)

def load_template(template_name):
    path = os.path.join(PAGES_DIR, template_name)
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def generate_pages(manifest_path, template_name, out_dir, content_type):
    # Load manifest
    if not os.path.exists(manifest_path):
        print(f"Manifest not found: {manifest_path}")
        return

    with open(manifest_path, 'r', encoding='utf-8') as f:
        manifest = json.load(f)

    # Load HTML template
    template_html = load_template(template_name)

    # Generate static page for each item
    for item in manifest:
        # manifest is a list of filenames like "project-alpha.md"
        slug = item.replace('.md', '')
        if not slug:
            continue

        print(f"Generating {content_type} page for: {slug}")
        
        # Replace the dynamic Javascript "getQueryParam('slug')" with a hardcoded slug
        page_html = template_html.replace(
            "const slug = getQueryParam('slug');",
            f"const slug = '{slug}';"
        )

        # Fix paths since we are now TWO levels deeper (e.g. from /pages/project.html to /pages/project/slug/index.html)
        # We need to adjust standard relative paths up another level
        page_html = page_html.replace('href="../', 'href="../../../')
        page_html = page_html.replace('src="../', 'src="../../../')
        page_html = page_html.replace("const BASE_PATH = '../';", "const BASE_PATH = '../../../';")
        
        # Fix internal links to projects.html and blog.html that didn't have ../ initially
        page_html = page_html.replace('href="projects.html', 'href="../../projects.html')
        page_html = page_html.replace('href="blog.html', 'href="../../blog.html')
        
        # Write the new file into a folder to remove the .html extension in URLs
        slug_dir = os.path.join(out_dir, slug)
        os.makedirs(slug_dir, exist_ok=True)
        out_path = os.path.join(slug_dir, "index.html")
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(page_html)

def main():
    print("Generating static project pages...")
    generate_pages(
        os.path.join(PROJECTS_DIR, 'manifest.json'),
        'project.html',
        OUT_PROJECTS_DIR,
        'project'
    )

    print("\nGenerating static blog pages...")
    generate_pages(
        os.path.join(BLOG_DIR, 'manifest.json'),
        'post.html',
        OUT_BLOG_DIR,
        'post'
    )

    print("\nStatic page generation complete!")

if __name__ == '__main__':
    main()
