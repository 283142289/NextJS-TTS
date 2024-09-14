import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eurlllcbcjuubiytqtcg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cmxsbGNiY2p1dWJpeXRxdGNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3NDc1NDcsImV4cCI6MjAxMDMyMzU0N30.fkL5I5q2_gVO3MM24nNN2HRTnDZk4_0fBsCuzT8dojU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)