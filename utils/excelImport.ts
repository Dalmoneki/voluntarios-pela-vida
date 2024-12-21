import * as XLSX from 'xlsx';

export interface Medicamento {
  id: number;
  nome: string;
  principioAtivo: string;
}

export function importExcel(file: File): Promise<Medicamento[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        console.log('Sample data:', jsonData.slice(0, 3));

        const medicamentos: Medicamento[] = jsonData.map((row: any, index: number) => ({
          id: index + 1,
          nome: row['Nome do Medicamento'] || row['nome'] || '',
          principioAtivo: row['Principio Ativo'] || row['principioAtivo'] || '',
        }));

        resolve(medicamentos);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = (error) => reject(error);
    reader.readAsBinaryString(file);
  });
}

