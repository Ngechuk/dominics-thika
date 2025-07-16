#!/bin/bash

echo "🍕 Starting Dominics Thika Pizza Restaurant App..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing frontend dependencies..."
cd frontend || cd .
npm install

echo "📦 Installing backend dependencies..."
cd backend
npm install

echo ""
echo "🚀 Starting servers..."
echo ""

# Start backend server in background
echo "🔧 Starting backend server on http://localhost:5000"
cd backend
npm start &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend server
echo "🎨 Starting frontend server on http://localhost:3000"
cd ..
npm start &
FRONTEND_PID=$!

echo ""
echo "✅ Both servers are starting..."
echo "📍 Frontend: http://localhost:3000"
echo "📍 Backend API: http://localhost:5000"
echo "📍 Admin Dashboard: http://localhost:3000/admin"
echo ""
echo "Press Ctrl+C to stop both servers"

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "✅ Servers stopped"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Wait for both processes
wait 