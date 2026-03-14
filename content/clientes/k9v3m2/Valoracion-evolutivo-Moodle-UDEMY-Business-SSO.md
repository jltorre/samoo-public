---
proyecto: UMNG
tags:
  - UDEMY
  - valoración
publish: true
url: https://jltorre.github.io/samoo-public/clientes/k9v3m2/Valoracion-evolutivo-Moodle-UDEMY-Business-SSO
---
# Valoración evolutivo Moodle - acceso a UDEMY Business por SSO


# Resumen
Valoracón de la ampliación en local_afp para añadir un botón de URL configurable (en este caso para un acceso a UDEMY Business desde Moodle/OpenLMS). Este enlace se añadiría como una tab más bien en la sección MIS CURSOS, bien en la sección CURSOS EN ABIERTO.

Para el caso de UDEMY la recomendación es plantearlo como una redirección al tenant general de UDEMY con SSO estándar, sin intentar deep links internos ni asumir que el OAuth 2.0 actual de Google en OpenLMS resuelve por sí solo el acceso a UDEMY. La base técnica más defendible es UDEMY Business como SP + Google Workspace u otro IdP corporativo por SAML 2.0, dejando Moodle solo como punto de lanzamiento.

**Valoración**

| **Bloque** | **Detalle**                                  | **Horas** |
| ---------- | -------------------------------------------- | --------: |
| 1          | Análisis técnico y validación de integración |         6 |
| 2          | Diseño de la solución                        |         4 |
| 3          | Desarrollo en plugin Moodle                  |        10 |
| 4          | Configuración y pruebas de SSO               |         8 |
| 5          | QA, documentación y despliegue               |         4 |
|            | **Total estimado**                           |    **32** |

**Qué entra en alcance**

  - Añadir botón configurable en local_afp.
  - Permitir activar/desactivar el botón.
  - Permitir definir ubicación del botón.
  - Redirigir al acceso general de UDEMY Business.
  - Probar el flujo end-to-end y documentar configuración básica.

**Dudas a confirmar**

  - Si UDEMY Business tiene SSO habilitado o puede habilitarse.
  - Si el IdP será Google Workspace por SAML u otro proveedor.
  - URL exacta del tenant de UDEMY.
  - Si hay aprovisionamiento automático y requisitos de licenciamiento.
  - Ubicación final del botón en el plugin.
  - Si el texto del botón debe ser fijo o configurable.
  - Si habrá accesos técnicos y entorno de pruebas para validar.

**Riesgos principales**

  - El OAuth 2.0 actual de Google en OpenLMS no garantiza por sí mismo el acceso a UDEMY.
  - UDEMY documenta SSO principalmente sobre SAML 2.0.
  - No hay garantía pública de deep links a secciones internas tras SSO.
  - El acceso real puede depender de licencia activa en UDEMY.
  - Puede haber problemas de matching de identidad (email, NameID, etc.).
  - El despliegue en OpenLMS depende de sus procedimientos y ventanas.
  - El sandbox puede no replicar exactamente producción.

  **Conclusión**
  La estimación de 32 horas es razonable para este alcance. El punto crítico no es tanto el
  desarrollo del botón en Moodle, sino confirmar antes el modelo real de SSO en UDEMY
  Business, el tenant de acceso y la federación con el IdP corporativo.

---

# Completo
## Resumen de valoración

| **Bloque** | **Detalle**                                  | **Horas** |
| ---------- | -------------------------------------------- | --------: |
| 1          | Análisis técnico y validación de integración |         6 |
| 2          | Diseño de la solución                        |         4 |
| 3          | Desarrollo en plugin Moodle                  |        10 |
| 4          | Configuración y pruebas de SSO               |         8 |
| 5          | QA, documentación y despliegue               |         4 |
|            | **Total estimado**                           |    **32** |

## Contexto

Se requiere ampliar el plugin local de Moodle **Advanced Frontpage** (`local_afp`), desarrollado a medida en OpenLMS. En dicho plugin se muestran los cursos del estudiante divididos por categorías y el objetivo es incorporar un ajuste para poder mostrar un botón adicional que dirija al usuario a UDEMY Business.

La navegación debe realizarse mediante SSO para que el usuario sea trasladado de forma automática, sin solicitar un inicio de sesión adicional. El cliente ya dispone de integración con Google OAuth 2.0, pero según la documentación pública de UDEMY Business la integración SSO estándar se apoya en SAML 2.0, incluido el caso de Google Workspace, por lo que no debe asumirse que el OAuth 2.0 actual resuelve por sí solo el acceso a UDEMY.

## Alcance propuesto

- Análisis funcional y técnico del plugin actual y del punto exacto donde debe incorporarse el botón.
- Revisión de las capacidades de SSO disponibles entre OpenLMS, Google OAuth 2.0 y UDEMY Business.
- Definición de la estrategia de integración más adecuada según las capacidades reales del entorno.
- Desarrollo del cambio en el plugin para mostrar el botón de acceso a UDEMY Business.
- Implementación de un ajuste de configuración para activar o desactivar la funcionalidad.
- Implementación de un ajuste de configuración para definir la ubicación del botón dentro del plugin.
- Implementación de la lógica necesaria para redirigir al usuario autenticado.
- Pruebas funcionales y técnicas en entorno de desarrollo o validación.
- Documentación breve de configuración y dependencias.

## Configuración funcional prevista en el plugin

La evolución se plantea de forma configurable para evitar desarrollos posteriores innecesarios y permitir adaptar la visualización según la necesidad funcional.

Se propone incorporar, como mínimo, los siguientes ajustes en el plugin:

1. Activar o desactivar la visualización del botón de UDEMY Business.
2. Definir la ubicación del botón, con dos opciones previstas inicialmente:
   - pestaña de **Mis cursos**
   - pestaña de **Cursos en abierto**
3. Definir el texto visible del botón, si se considera conveniente.
4. Definir la URL general de destino de UDEMY Business, para dejarla parametrizable.

Con este enfoque, la funcionalidad podrá habilitarse o no desde configuración y colocarse en la ubicación que mejor encaje con la experiencia del usuario.

## Configuración recomendada que sí puede asegurarse con la documentación pública de UDEMY

Con la información pública disponible, la configuración más segura y defendible para este evolutivo es la siguiente:

1. El botón del plugin debe dirigir al usuario a la entrada general de UDEMY Business del tenant del cliente, no a un subapartado concreto.
2. El acceso debe plantearse como SSO estándar contra UDEMY Business, tomando como referencia una entrada genérica del tenant tipo `https://<tenant>.udemy.com` o la URL oficial que facilite el propio cliente/UDEMY.
3. La federación recomendada debe basarse en SAML 2.0, ya que es el mecanismo públicamente documentado por UDEMY para SSO corporativo.
4. Si el cliente desea reutilizar Google como proveedor de identidad, debe hacerse mediante Google Workspace como IdP SAML frente a UDEMY, no asumiendo reutilización directa del OAuth 2.0 ya presente en OpenLMS.
5. La funcionalidad del plugin debe limitarse a mostrar el botón y redirigir al usuario al punto de entrada SSO de UDEMY Business, evitando comprometer destinos internos concretos no garantizados por documentación pública.
6. La validación funcional debe darse por correcta cuando el usuario autenticado en el ecosistema corporativo llega a UDEMY Business sin inicio de sesión adicional o, en su defecto, cuando el flujo de federación le traslada al inicio de sesión corporativo esperado y después accede a UDEMY.

Esta propuesta evita depender de deep links no documentados y encaja con el comportamiento que sí aparece en la documentación pública de UDEMY.

## Configuración técnica prevista de SSO

Para este caso, no se considera necesario instalar un plugin SAML adicional en Moodle/OpenLMS si el objetivo es únicamente lanzar al usuario desde el plugin hacia UDEMY Business.

El enfoque recomendado es el siguiente:

1. El plugin de Moodle/OpenLMS muestra el botón y realiza la redirección a la URL general del tenant de UDEMY Business.
2. UDEMY Business actúa como proveedor de servicio y gestiona el flujo SSO contra el proveedor de identidad corporativo.
3. La configuración principal del SSO se realiza en UDEMY Business y en el proveedor de identidad corporativo, previsiblemente Google Workspace mediante SAML.
4. Moodle/OpenLMS no necesita intervenir en el intercambio SAML si solo actúa como punto de lanzamiento.

Por tanto, a nivel técnico, se prevén estas piezas:

- En `Moodle/OpenLMS`: ajuste configurable, botón y redirección.
- En `UDEMY Business`: habilitación y configuración del SSO.
- En `Google Workspace` u otro IdP corporativo: configuración de la aplicación SAML y mapeo de atributos.

Solo sería necesario plantear un plugin SAML en Moodle/OpenLMS si se quisiera unificar también el inicio de sesión de Moodle con el mismo IdP mediante SAML o si el alcance evolucionara hacia una integración de autenticación más profunda.

## Información que hace falta confirmar

Para cerrar la estimación con mayor precisión es necesario disponer de lo siguiente:

1. Confirmación de que UDEMY Business tiene habilitado o puede habilitar el mecanismo de SSO requerido.
2. Confirmación de si el SSO se realizará usando Google Workspace como Identity Provider SAML o si existirá otro proveedor/intermediario.
3. URL exacta del tenant de UDEMY Business y datos técnicos de configuración SSO.
4. Confirmación de si existe aprovisionamiento automático de usuarios por SSO y si hay requisitos adicionales de licenciamiento.
5. Confirmación de la ubicación final preferida para el botón: pestaña de **Mis cursos** o pestaña de **Cursos en abierto**.
6. Confirmación de si debe existir texto configurable para el botón o un literal fijo.
7. Accesos técnicos o apoyo del cliente para revisar configuración de OpenLMS, Google y UDEMY Business.
8. Disponibilidad de entorno de pruebas y usuarios de validación.

## Trabajos necesarios

### 1. Análisis técnico y validación de integración

- Revisión del plugin actual y de su arquitectura.
- Identificación del punto de extensión para añadir el botón.
- Revisión de documentación y capacidades reales de SSO en UDEMY Business y OpenLMS.
- Validación de dependencias, restricciones y riesgos.
- Confirmación del punto de entrada general de UDEMY Business a utilizar.

**Estimación:** 6 horas

### 2. Diseño de la solución

- Definición del flujo de usuario.
- Definición del mecanismo de redirección y parámetros necesarios.
- Diseño de gestión de errores o escenarios sin acceso SSO.
- Definición de visibilidad, textos y comportamiento del botón en desktop y móvil.
- Definición del ajuste de activación y del ajuste de ubicación.

**Estimación:** 4 horas

### 3. Desarrollo en plugin Moodle

- Implementación visual del botón en la vista actual de cursos.
- Desarrollo de la lógica de acceso/redirección.
- Implementación del ajuste para mostrar u ocultar el botón.
- Implementación del ajuste para seleccionar la ubicación del botón.
- Ajustes de permisos o visibilidad si aplican.
- Implementación orientada a redirección general a UDEMY Business, sin dependencia de rutas internas no garantizadas.

**Estimación:** 10 horas

### 4. Configuración y pruebas de SSO

- Pruebas conjuntas con la configuración real del cliente.
- Ajustes de integración según resultados.
- Validación del flujo end-to-end sin inicio de sesión adicional cuando el usuario ya tenga sesión corporativa activa.
- Validación del comportamiento con usuario con licencia activa y usuario sin acceso, si es posible.

**Estimación:** 8 horas

### 5. QA, documentación y despliegue

- Pruebas funcionales finales.
- Documentación breve de configuración.
- Soporte a paso a validación o despliegue.

**Estimación:** 4 horas

## Estimación total

- **Escenario base:** 32 horas

## Limitaciones y condicionantes identificados

### UDEMY Business

- La documentación pública de UDEMY Business describe SSO principalmente sobre SAML 2.0.
- No se considera garantizado que el OAuth 2.0 de Google ya existente en OpenLMS sirva directamente para el acceso a UDEMY.
- No se ha encontrado garantía pública de deep links arbitrarios a subapartados concretos tras el SSO; por ello se recomienda acceso genérico al tenant de UDEMY Business.
- El acceso real puede depender de que el usuario tenga licencia activa en UDEMY Business.
- El aprovisionamiento automático de usuarios y la asignación avanzada de grupos puede requerir configuraciones adicionales en UDEMY.
- El matching de identidad puede depender de campos como `email`, `NameID` y otros identificadores corporativos.

### OpenLMS

- Aunque el desarrollo del plugin es viable, el despliegue final en OpenLMS puede quedar sujeto a sus ventanas y procedimientos de liberación.
- El sandbox de OpenLMS puede no replicar de forma exacta todos los comportamientos productivos y debe contemplarse en el plan de pruebas.
- Si el botón depende de personalizaciones de tema o regiones visuales concretas, puede haber diferencias según el tema y la versión del entorno.
- El riesgo funcional en OpenLMS es bajo para una redirección externa simple; el mayor condicionante es operativo, no de desarrollo.
- No se prevé como requisito la instalación de un plugin SAML en Moodle/OpenLMS para este alcance concreto.

## Consideraciones y supuestos

- La estimación parte de que el plugin actual está localizado, es mantenible y permite una extensión sin rehacer su arquitectura.
- Se asume que UDEMY Business dispone de un mecanismo de SSO compatible y que el cliente puede facilitar configuración, metadatos o apoyo técnico para activarlo.
- Se asume que el alcance funcional aceptado es acceso general a UDEMY Business y no navegación garantizada a una sección interna concreta.
- Se asume que la funcionalidad se implementará mediante configuración del propio plugin, permitiendo mostrar u ocultar el botón y seleccionar su ubicación.
- Si fuera necesario implementar una integración distinta a una simple redirección SSO, la estimación debería revisarse.
- Si el flujo requiere desarrollos adicionales de aprovisionamiento, sincronización de usuarios, mapeo de identidades o cambios en infraestructura, quedaría fuera de este alcance inicial.
- La validación final depende de disponer de accesos y entorno de pruebas.

## Riesgos principales

- Dependencia de terceros para configuración de Google Workspace / IdP y UDEMY Business.
- Necesidad de habilitar o ajustar SSO SAML en UDEMY Business.
- Posibles incidencias de matching de identidad o ausencia de licencia en UDEMY Business.
- Condicionantes de despliegue y pruebas propios de OpenLMS.

## Recomendación

Como primera aproximación, la valoración de **32 horas** sigue siendo razonable para análisis, implementación, pruebas y documentación. Dado que el plugin está controlado internamente, la principal condición para cerrar el compromiso no es el desarrollo en OpenLMS sino confirmar el modelo de SSO disponible en UDEMY Business, la URL general de acceso del tenant y la configuración de federación con el proveedor de identidad corporativo.

## Referencias revisadas

- Overview of UDEMY Business SSO Core Features
- How to Configure a Custom SSO Connection
- How to Configure SSO With Google Workspace
- How to Test Your Learning Management System Integration With UDEMY Business
