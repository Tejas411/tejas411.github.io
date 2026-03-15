#!/usr/bin/env python3
"""
Simple HTTP server with clean URL support.
Serves clean URLs like /about as /about.html
"""

import http.server
import socketserver
import os
from urllib.parse import urlparse, unquote

PORT = 8000
BIND_ADDRESS = '127.0.0.1'

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Parse the request path
        parsed_path = urlparse(unquote(self.path))
        path = parsed_path.path
        
        # Remove trailing slash
        if path.endswith('/') and path != '/':
            path = path[:-1]
        
        # List of clean URLs that should map to .html files
        clean_urls = {
            '/about': '/about.html',
            '/blog': '/blog.html',
            '/projects': '/projects.html',
            '/resume': '/resume.html',
            '/contact': '/contact.html',
            '/project': '/project.html',
            '/post': '/post.html',
            '': '/index.html',  # Default to index
            '/': '/index.html',
        }
        
        # Check if this is a clean URL
        if path in clean_urls:
            self.path = clean_urls[path]
        
        # For query strings, preserve them
        if parsed_path.query:
            self.path += '?' + parsed_path.query
        
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer((BIND_ADDRESS, PORT), CleanURLHandler) as httpd:
        print(f"Server running at http://{BIND_ADDRESS}:{PORT}/")
        print("Clean URLs enabled:")
        print("  / -> projects.html (default)")
        print("  /about -> about.html")
        print("  /blog -> blog.html")
        print("  /projects -> projects.html")
        print("  /resume -> resume.html")
        print("  /contact -> contact.html")
        print("  /project?slug=name -> project.html")
        print("  /post?slug=name -> post.html")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
