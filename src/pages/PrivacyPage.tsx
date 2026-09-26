import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { footer, site } from '../content'
import styles from './PrivacyPage.module.css'

const UPDATED = '26 de septiembre de 2026'

export function PrivacyPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <article className={styles.doc}>
          <p className={styles.kicker}>Legal · Chile</p>
          <h1>Política de privacidad</h1>
          <p className={styles.lead}>
            Cómo {site.name} trata datos personales conforme a la Ley N° 21.719 y la Ley N° 19.628.
            Actualizado: {UPDATED}.
          </p>

          <h2>1. Responsable</h2>
          <p>
            El responsable del tratamiento es <strong>{site.shortName}</strong> (Dojo Isshin Akira
            Temuco). Contacto de privacidad:{' '}
            <a href={`mailto:${footer.email}`}>{footer.email}</a>.
          </p>

          <h2>2. Qué datos tratamos</h2>
          <ul>
            <li>Datos de contacto que nos envías por WhatsApp, teléfono o correo (nombre, número, mensaje).</li>
            <li>Cuenta de administración del sitio (correo y contraseña hasheada) para publicar noticias.</li>
            <li>
              Datos de navegación agregados si aceptas analítica (visitas y clics; Google Analytics
              solo con consentimiento).
            </li>
            <li>Cookies/sesión técnicas del panel admin.</li>
          </ul>
          <p>
            No operamos una ficha de alumnos en este sitio web público. Los datos de alumnos de la
            escuela, si se gestionan en otras herramientas (p. ej. Dojirapp), se rigen por la
            política de esa plataforma y por las instrucciones del dojo.
          </p>

          <h2>3. Finalidades y bases</h2>
          <ul>
            <li>
              <strong>Consentimiento / relación precontractual:</strong> responder consultas y agendar
              clases de prueba.
            </li>
            <li>
              <strong>Ejecución del servicio:</strong> administrar el sitio y publicar contenidos.
            </li>
            <li>
              <strong>Interés legítimo / seguridad:</strong> proteger el panel admin y el sitio.
            </li>
            <li>
              <strong>Consentimiento:</strong> analítica no esencial.
            </li>
          </ul>

          <h2>4. Menores</h2>
          <p>
            Ofrecemos clases a niños y jóvenes. Las consultas sobre menores deben hacerlas padres,
            madres o tutores. No dirigimos publicidad conductual a niños.
          </p>

          <h2>5. Encargados y transferencias</h2>
          <p>
            El sitio se aloza en infraestructura contratada por el dojo. Si aceptas Google Analytics,
            Google puede tratar datos en el extranjero bajo sus términos y las salvaguardas
            aplicables. Usamos YouTube en modo <code>youtube-nocookie</code> cuando es posible.
          </p>

          <h2>6. Conservación</h2>
          <p>
            Mensajes de contacto: el tiempo necesario para responder y dar seguimiento (hasta 24
            meses). Cuentas admin: mientras el servicio esté activo. Analítica: según la
            configuración del proveedor o contadores locales del navegador.
          </p>

          <h2>7. Derechos (ARCO+)</h2>
          <p>
            Puedes solicitar acceso, rectificación, cancelación, oposición, portabilidad y
            limitación escribiendo a <a href={`mailto:${footer.email}`}>{footer.email}</a>.
            Responderemos en un plazo máximo de 30 días corridos. También puedes reclamar ante la
            Agencia de Protección de Datos Personales cuando opere, o ante tribunales competentes.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Esenciales para el admin. Analítica solo con tu aceptación en el aviso del sitio. Puedes
            cambiar de opinión borrando los datos del sitio en tu navegador.
          </p>

          <p className={styles.back}>
            <Link to="/">Volver al inicio</Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
