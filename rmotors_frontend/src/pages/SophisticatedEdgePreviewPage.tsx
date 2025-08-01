import React from 'react';
import { sophisticatedEdgeScheme } from '../colorSchemes'; // Adjust path if you put colorSchemes elsewhere

const SophisticatedEdgePreviewPage = () => {
  // Destructure the scheme data for easier access
  const { name, palette, psychology, theory, application, preview } = sophisticatedEdgeScheme;

  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* Using your project's font classes */}
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 text-center mb-8">{name} Color Scheme</h1>
      <p className="font-body text-lg text-gray-600 text-center mb-8">
        Explore the "Sophisticated Edge" color scheme, ideal for a premium and modern car dealership website.
      </p>

      {/* Live Preview Section */}
      <section className="bg-muted p-6 rounded-lg shadow-md mb-8">
        <h2 className="font-heading text-3xl md:text-4xl mb-4 text-gray-900">Live Preview</h2>
        <p className="font-body text-gray-600 mb-6">
          This section provides a tangible example of how the selected color scheme could be applied to common website components.
        </p>
        <div 
          className="p-8 rounded-lg transition-colors duration-300" 
          style={{ backgroundColor: preview.background }}
        >
          <div className="max-w-md mx-auto">
            <div 
              className="rounded-lg p-6 shadow-lg transition-colors duration-300" 
              style={{ backgroundColor: preview.card }}
            >
              <h3 
                className="font-heading text-2xl md:text-3xl mb-2 transition-colors duration-300" 
                style={{ color: preview.cardHeader }}
              >
                Featured Vehicle
              </h3>
              <p 
                className="font-body text-sm mb-4 transition-colors duration-300" 
                style={{ color: preview.cardText }}
              >
                This is an example of body text within a component card. It's styled to ensure readability against the card's background.
              </p>
              <div className="flex gap-4">
                <button 
                  className="w-full font-body font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
                  style={{ backgroundColor: preview.buttonPrimaryBg, color: preview.buttonPrimaryText }}
                >
                  Primary Action
                </button>
                <button 
                  className="w-full font-body font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
                  style={{ backgroundColor: preview.buttonSecondaryBg, color: preview.buttonSecondaryText }}
                >
                  Secondary
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Color Palette Section */}
        <section className="bg-muted p-6 rounded-lg shadow-md">
          <h2 className="font-heading text-3xl md:text-4xl mb-4 text-gray-900">Color Palette</h2>
          <p className="font-body text-gray-600 mb-6">
            Here are the specific colors that make up the scheme. Hover over any swatch to see its HEX code.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {palette.map((color) => (
              <div key={color.hex} className="text-center">
                <div 
                  className="w-full h-24 rounded-lg shadow-inner transition-transform transform hover:scale-105" 
                  style={{ backgroundColor: color.hex }}
                ></div>
                <p className="mt-2 font-body font-semibold text-gray-800">{color.name}</p>
                <p className="font-body text-sm text-gray-500">{color.hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Design Rationale Section */}
        <section className="bg-muted p-6 rounded-lg shadow-md">
          <h2 className="font-heading text-3xl md:text-4xl mb-4 text-gray-900">Design Rationale</h2>
          <p className="font-body text-gray-600 mb-6">
            Understanding the 'why' behind a color choice is key. This section explains the psychological impact and the design theory supporting this scheme.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl text-gray-800">Color Psychology</h3>
              <p className="font-body text-gray-600">{psychology}</p>
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl text-gray-800">Color Theory</h3>
              <p className="font-body text-gray-600">{theory}</p>
            </div>
          </div>
        </section>
      </div>

      {/* Suggested Application Section */}
      <section className="bg-muted p-6 rounded-lg shadow-md">
        <h2 className="font-heading text-3xl md:text-4xl mb-4 text-gray-900">Suggested Application</h2>
        <p className="font-body text-gray-600 mb-6">
          This guide provides practical recommendations on where to use each color to create a balanced and effective user interface.
        </p>
        <div className="space-y-4">
          {application.map((app, index) => {
            // Find the corresponding color hex from the palette for the swatch
            const colorInfo = palette.find(p => p.name.includes(app.color));
            const bgColor = colorInfo ? colorInfo.hex : '#cccccc'; // Fallback color

            return (
              <div key={index} className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg">
                <div 
                  className="w-6 h-6 rounded-full flex-shrink-0 mt-1" 
                  style={{ backgroundColor: bgColor }}
                ></div>
                <div>
                  <h4 className="font-heading text-2xl md:text-3xl text-gray-800">{app.color}</h4>
                  <p className="font-body text-gray-600">{app.use}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SophisticatedEdgePreviewPage;
