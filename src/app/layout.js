


import './global.css'

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}
