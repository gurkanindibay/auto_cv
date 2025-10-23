#!/bin/bash

echo "🚀 Setting up React CV Generator..."
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install --package-lock-only

# Copy package-react.json to package.json
cp package-react.json package.json

# Install dependencies
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 To start the development server:"
echo "   npm run dev"
echo ""
echo "🖨️  To export PDF:"
echo "   1. Open http://localhost:3000 in your browser"
echo "   2. Click the 'Download PDF' button"
echo "   3. Or use Ctrl/Cmd+P and 'Save as PDF'"
echo ""
