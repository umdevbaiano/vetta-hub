'use client'

import React from 'react'

export default function WhatsAppButton() {
  const whatsappNumber = "5573988628965" // User's standard number or Vetta's
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a Vetta Hub.")
  const link = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: 'rgba(30, 41, 59, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(124, 58, 237, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(124, 58, 237, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        cursor: 'pointer'
      }}
      className="wa-btn"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(124, 58, 237, 0.4)';
        e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(124, 58, 237, 0.2)';
        e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.3)';
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FAF9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
      {/* Ping indicator */}
      <span style={{
        position: 'absolute',
        top: '2px',
        right: '2px',
        width: '10px',
        height: '10px',
        background: '#28c840',
        borderRadius: '50%',
        display: 'block'
      }}>
        <span style={{
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'inherit',
          animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
        }}></span>
      </span>
    </a>
  )
}
