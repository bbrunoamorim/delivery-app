const statusMap = {
  1: 'Pendente',
  2: 'Preparando',
  3: 'Em Trânsito',
  4: 'Entregue',
};

const mapStatus = (type) => statusMap[type];

export default mapStatus;
