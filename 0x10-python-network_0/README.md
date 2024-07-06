                                                          #Python - Network #0
What a URL is
What HTTP is
How to read a URL
The scheme for a HTTP URL
What a domain name is
What a sub-domain is
How to define a port number in a URL
What a query string is
What an HTTP request is
What an HTTP response is
What HTTP headers are
What the HTTP message body is
What an HTTP request method is
What an HTTP response status code is
What an HTTP Cookie is
How to make a request with cURL
What happens when you type google.com in your browser (Application level)
What a URL is: URL stands for Uniform Resource Locator. It's a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it. URLs are used to access web pages, files, images, videos, and other resources on the internet.
What HTTP is: HTTP stands for Hypertext Transfer Protocol. It's the underlying protocol used by the World Wide Web to define how messages are formatted and transmitted, and how web servers and browsers should respond to various commands.
How to read a URL: A URL typically consists of several components including the protocol (such as HTTP or HTTPS), the domain name (or IP address), optional port number, path to the resource, and optional query string and fragment identifier.
The scheme for a HTTP URL: The scheme for a HTTP URL is typically http:// or https://, where http:// denotes the standard HTTP protocol and https:// denotes the secure version of HTTP, which encrypts data transferred between the browser and the web server.
What a domain name is: A domain name is a human-readable label that corresponds to a unique numerical IP address on the internet. It's used to identify a specific web server or website. For example, in the URL www.example.com, example.com is the domain name.
What a sub-domain is: A subdomain is a subset of a larger domain. It's used to organize and navigate within a domain hierarchy. For example, in the URL blog.example.com, blog is a subdomain of example.com.
How to define a port number in a URL: Port numbers are specified in a URL by appending : followed by the port number after the domain name or IP address. For example, in the URL http://example.com:8080, 8080 is the port number.
What a query string is: A query string is a part of a URL that contains data to be passed to the server as key-value pairs. It's preceded by a question mark ? and may contain multiple parameters separated by ampersands &. For example, in the URL http://example.com/search?q=term, q=term is the query string.
What an HTTP request is: An HTTP request is a message sent by a client (such as a web browser) to a server, requesting to perform an action, such as fetching a web page or submitting form data.
What an HTTP response is: An HTTP response is a message sent by a server to a client in response to an HTTP request. It contains the requested resource, along with metadata such as status code, headers, and optionally a message body.
What HTTP headers are: HTTP headers are additional pieces of information sent along with an HTTP request or response. They contain metadata about the message, such as content type, content length, cache control directives, and more.
What the HTTP message body is: The HTTP message body is the content of an HTTP request or response. It contains the data being sent from the client to the server (in a request) or from the server to the client (in a response), such as HTML content, JSON data, or binary files.
What an HTTP request method is: An HTTP request method specifies the action to be performed by the server in response to the request. Common HTTP methods include GET (retrieve a resource), POST (submit data), PUT (update a resource), DELETE (remove a resource), and more.
What an HTTP response status code is: An HTTP response status code is a three-digit numeric code sent by a server to indicate the outcome of an HTTP request. Status codes fall into different categories (e.g., 2xx for successful requests, 4xx for client errors, 5xx for server errors) and provide information about the request's success or failure.
What an HTTP Cookie is: An HTTP cookie is a small piece of data sent from a web server to a web browser and stored locally by the browser. Cookies are used to remember user preferences, track user sessions, and personalize the browsing experience.
How to make a request with cURL: cURL is a command-line tool for transferring data with URL syntax. To make a request with cURL, you use the curl command followed by the URL you want to access. Additional options can be used to specify request headers, data to send, authentication credentials, and more.
What happens when you type google.com in your browser (Application level) - some basics notes: When you type google.com in your browser and hit Enter, the browser sends an HTTP request to the server hosting the Google website. The server processes the request, retrieves the requested web page (typically the Google search homepage), and sends back an HTTP response containing the HTML content of the page. The browser then renders the HTML, executes any embedded scripts or stylesheets, and displays the page to the user.
