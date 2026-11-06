// Before (with CORS issues):
fetch('http://localhost:8000/api/data')

// After (using the Vite proxy):
fetch('/api/data')
