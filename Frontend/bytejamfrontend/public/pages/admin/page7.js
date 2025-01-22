import React from "react";
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation</title>
    <style>
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
        <H1>Admin Page</H1>
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

    <h3>School Pins</h3>
    <div class="school-pins">
        <span>School 1 - Pin1</span>
        <div>
            <button onclick="alert('Edit functionality pending')">Edit</button>
            <button class="delete-button" onclick="alert('Delete functionality pending')">Delete</button>
            <button class="export-button" onclick="alert('Export functionality Pending')">Export</button>
        </div>
    </div>
</body>
</html>
