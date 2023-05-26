import os
from docx import Document
import win32com.client as win32


def convertir_docx_a_pdf(carpeta_entrada, carpeta_salida):
    # Comprobar si la carpeta de salida existe, si no, crearla
    if not os.path.exists(carpeta_salida):
        os.makedirs(carpeta_salida)

    # Obtener la lista de archivos en la carpeta de entrada
    archivos = os.listdir(carpeta_entrada)

    # Iterar sobre cada archivo en la carpeta de entrada
    for archivo in archivos:
        if archivo.endswith(".docx"):
            # Construir las rutas completas de entrada y salida
            ruta_entrada = os.path.join(carpeta_entrada, archivo)
            # Obtener el nombre del archivo sin extensión
            nombre_archivo = os.path.splitext(archivo)[0]
            ruta_salida = os.path.join(carpeta_salida, nombre_archivo + ".pdf")

            # Abrir el archivo DOCX y guardarlo temporalmente como PDF
            doc = Document(ruta_entrada)
            doc.save("temp.pdf")

            # Crear una instancia del objeto Word de la aplicación Win32
            word_app = win32.gencache.EnsureDispatch("Word.Application")
            doc_pdf = word_app.Documents.Open(os.path.abspath("temp.pdf"))

            # Guardar el archivo PDF en la carpeta de salida
            doc_pdf.SaveAs(os.path.abspath(ruta_salida),
                           FileFormat=win32.constants.wdFormatPDF)
            doc_pdf.Close()
            word_app.Quit()

            # Eliminar el archivo temporal PDF
            os.remove("temp.pdf")


# Ejemplo de uso
carpeta_entrada = "./input"
carpeta_salida = "./output"

convertir_docx_a_pdf(carpeta_entrada, carpeta_salida)
