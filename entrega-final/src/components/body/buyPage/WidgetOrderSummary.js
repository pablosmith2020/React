


const WidgetOrderSummary = () => {
  return (
    <div className="widget widget-order-summary">
      <h3 className="widget-title">Detalle de orden</h3>

      <table className="table">
        <tbody>
          <tr>
            <td>Subtotal:</td>
            <td className="text-medium">$289.68</td>
          </tr>
          <tr>
            <td>Entrega:</td>
            <td className="text-medium">$22.50</td>
          </tr>
          <tr>
            <td>Impuestos:</td>
            <td className="text-medium">$3.42</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-lg text-medium">$315.60</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default WidgetOrderSummary;
