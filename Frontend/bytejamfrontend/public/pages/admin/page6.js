import React from "react";
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation</title>
    <script></script>
    <style>
        /* TailwindCSS CSS for page 6 */
        body {
            @apply m-0;
            font-family: Arial, sans-serif;
        }
        .navbar {
            @apply bg-[#5C1D29] overflow-hidden;
        }
        .navbar a {
            @apply float-left block text-[white] text-center no-underline px-5 py-3.5 hover:bg-[#ddd] hover:text-[black];
        }
        @media screen and (max-width: 600px) {
            .navbar a {
            @apply float-none w-full text-left;
            }
        }
    </style>
</head>
<body>
 
    <div class="navbar">
        <h1 class="text-white text-3xl font-bold p-3">Admin Page</h1>
        <a href="page1.html">Sign Up</a>
        <a href="page2.html">Login</a>
        <a href="page3.html">Bits</a>
        <a href="page4.html">Bytes</a>
        <a href="page5.html">Pins</a>
        <a href="page6.html">Companies</a>
        <a href="page7.html">School Rep</a>
        <a href="page8.html">Results</a>
        <a href="page9.html">Settings</a>
    </div>
 
    <section class="p-5">
        <h3 class="text-xl font-semibold mb-4">Company Pins</h3>
        <div class="Company-pins bg-gray-100 p-4 rounded-lg shadow-md">
            <span class="block text-lg">Company 1 - Pin1</span>
            <div class="mt-3">
                <button onclick="alert('Edit functionality pending')" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2">Edit</button>
                <button class="delete-button bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 mr-2" onclick="alert('Delete functionality pending')">Delete</button>
                <button class="export-button bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700" onclick="alert('Export functionality Pending')">Export</button>
            </div>
        </div>
    </section>
</body>
</html>
 