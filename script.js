console.log('JavaScript file is loaded');

import { createClient } from '@supabase/supabase-js'

// The rest of your JavaScript code...

const supabaseUrl = 'https://pscatoacrcgdsgweoafg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzY2F0b2FjcmNnZHNnd2VvYWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4MTkzNzksImV4cCI6MjAxNjM5NTM3OX0.W5-MQg_EetbdSdWv4MyjwpTvGSnpfrokmPYo1byeIzs'
const database = createClient(supabaseUrl, supabaseAnonKey)

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

        // Insert the data into your Supabase table
        const { data, error } = await database.from('Users').insert([
            { first_name: fname, last_name: lname, email: email, password: password },
        ]);

        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log('Data inserted successfully:', data);
        }
    });
});
