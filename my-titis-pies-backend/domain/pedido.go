package domain

type Pedido struct {
	SerialPedido int    `json:"serialPedido"`
	Pie          string `json:"pie"`
	Cantidad     string `json:"cantidad"`
}
