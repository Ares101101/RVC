export function Table2 (){
    return(
        <table 
        className="text-sm font-light [&>tbody>tr>td]:border [&>tbody>tr>td]:h-10 text-[#3d3c3c]  " 
        cellSpacing="0" 
        cellPadding="4"
        border="0" 
        >
                      <tbody>
                        <tr>
                            <td valign="top" className="cborde">(*)</td>
                            <td valign="top" className="cborde">Incluye vencimientos para el pago del Impuesto a las Transacciones Financieras</td>
                        </tr>
                      <tr>
                        <td valign="top" className="cborde">UESP:</td>
                        <td valign="top" className="cborde"><a href="UUEE-2023.xlsx" target="_blank">Unidades Ejecutoras del Sector  Público Nacional</a> - Informado por el Ministerio de Economía y  Finanzas mediante el Oficio &nbsp;N°  0141-2023-EF/52.06</td>
                      </tr>
                      <tr>
                        <td valign="top" className="cborde">Base Legal: </td>
                        <td valign="top" className="cborde"><a href="https://www.sunat.gob.pe/legislacion/superin/2022/anexo1-281-2022.pdf" target="_blank" rel="noreferrer">Anexo I</a> - <a href="https://www.sunat.gob.pe/legislacion/superin/2022/281-2022.pdf" target="_blank" rel="noreferrer">Resolución de Superintendencia N°281-2022/SUNAT</a>, publicada el 24.12.2022 </td>
                      </tr>
                      <tr>
                        <td valign="top" className="cborde">&nbsp;<strong>Nota</strong>: </td>
                        <td valign="top" className="cborde">En cada casilla se indica: en la parte superior el último dígito del número de RUC y en la parte inferior el día calendario correspondiente al vencimiento.</td>
                      </tr>
                        <tr><td valign="top" className="cborde">&nbsp;</td>
                        <td valign="top" className="cborde">Sólo los dígitos 0 y 1 tienen un día por separado como fecha de vencimiento.&nbsp;Los demás dígitos se agrupan a razón de dos dígitos en cada fecha de vencimiento, de la siguiente manera: 2 y 3; 4 y 5; 6 y 7;&nbsp;8 y 9.</td>
                      </tr>
                    </tbody>
        </table>
    )
}