import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { correo, nombre, apellidos, empresa, rol, mensaje, sourcePage } = body;

    if (!correo || !nombre || !apellidos || !empresa || !rol || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos." },
        { status: 400 }
      );
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      return NextResponse.json(
        { error: "La configuración SMTP no está completa en el servidor." },
        { status: 500 }
      );
    }

    const recipient = process.env.CONTACT_RECIPIENT ?? "Empresas@mindhubweb.com";
    const pageLabel = typeof sourcePage === "string" ? sourcePage : "/contacto";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"MindHub Web" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: correo,
      subject: `Nueva consulta de ${escapeHtml(nombre)} ${escapeHtml(apellidos)} — ${escapeHtml(empresa)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #0000FF; margin-bottom: 24px;">Nueva consulta desde mindhubweb.com${escapeHtml(pageLabel)}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 40%;">Correo</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${escapeHtml(correo)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Nombre</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${escapeHtml(nombre)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Apellidos</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${escapeHtml(apellidos)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Empresa</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${escapeHtml(empresa)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Rol en la empresa</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${escapeHtml(rol)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">Mensaje</td>
              <td style="padding: 10px 0; font-weight: 600; white-space: pre-wrap;">${escapeHtml(mensaje)}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">Este mensaje fue enviado desde el formulario de contacto en ${escapeHtml(pageLabel)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intenta de nuevo más tarde." },
      { status: 500 }
    );
  }
}
