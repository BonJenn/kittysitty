import { database } from './supabase.js'

//1. Write script at the bottom of the body for your html pages that use Supabase-js
//2. import { database } from './supabase.js' in JS file that is used with the html page you wrote the script in the previous step.

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('form').addEventListener('submit', async function(event) {
        event.preventDefault(); // prevent form submission

        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        console.log('First Name:', fname);
        console.log('Last Name:', lname);
        console.log('Email:', email);
        console.log('Password:', password);

        // Sign up the user using Supabase Auth
        const { user, error } = await database.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            console.error('Error signing up:', error);
        } else {
            console.log('User signed up successfully:', user);
        }
    });
});


