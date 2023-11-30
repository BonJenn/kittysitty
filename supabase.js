import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://pscatoacrcgdsgweoafg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzY2F0b2FjcmNnZHNnd2VvYWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4MTkzNzksImV4cCI6MjAxNjM5NTM3OX0.W5-MQg_EetbdSdWv4MyjwpTvGSnpfrokmPYo1byeIzs'

export const database = supabase.createClient(supabaseUrl, supabaseAnonKey);
