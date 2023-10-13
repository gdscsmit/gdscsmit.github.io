import React from 'react'

export default function Footer() {
    // get current year dynamically
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="border-top" style={{backgroundColor: 'white'}}>
                <div className="py-3">
                    <p className="text-center text-muted font-weight-bold">&copy; {currentYear} COPYRIGHT GDSC SMIT</p>
                </div>
            </div>

        </>
    )
}
