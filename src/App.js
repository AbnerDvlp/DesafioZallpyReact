import React from "react";
import "./styles.css";
import Input from "./components/input/Input";
import Button from "./components/button/Button";

class GeraPessoa extends React.Component {
  constructor(props) {
    super(props);
    //-------------------------------------------------------
    this.state = {
      item: [],
      inputPessoa: "",
      nome: [
        "Abner",
        "Antonio",
        "Jaqueline",
        "Rafael",
        "Douglas",
        "Guaraci",
        "Jessica",
        "Bruno",
        "Gabriel",
        "Paulo"
      ],
      sobrenome: [
        "Pereira",
        "Santos",
        "da Silva",
        "Azambuja",
        "Conter",
        "Justos",
        "Oliveira",
        "Schineider",
        "Nazario",
        "Machado"
      ],
      idade: Math.floor(Math.random() * 80 + 20),
      cargo: [
        "Operario(a)",
        "Medico(a)",
        "Professor(a)",
        "Programador(a)",
        "Bombeiro(a)",
        "Diretor(a)",
        "Cozinheiro(a)",
        "Padeiro(a)",
        "Pastor(a)",
        "Engenheiro(a)"
      ]
    };
    //-------------------------------------------------------

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const randomNome = Math.floor(Math.random() * 9 + 0);
    const randomSobrenome = Math.floor(Math.random() * 9 + 0);
    const randomIdade = Math.floor(Math.random() * 80 + 20);
    const randomCargo = Math.floor(Math.random() * 9 + 0);

    this.setState({
      idade: randomIdade
    });

    document.querySelector("[name='nome']").value = this.state.nome[randomNome];
    document.querySelector("[name='sobrenome']").value = this.state.sobrenome[
      randomSobrenome
    ];
    document.querySelector("[name='idade']").value = this.state.idade;
    document.querySelector("[name='cargo']").value = this.state.cargo[
      randomCargo
    ];

    this.setState({
      inputPessoa:
        this.state.nome[randomNome] +
        " " +
        this.state.sobrenome[randomSobrenome] +
        ", " +
        this.state.idade +
        ", " +
        this.state.cargo[randomCargo]
    });

    const item = this.state.item.slice();
    item.push(this.state.inputPessoa);

    this.setState({
      item: item
    });
  }

  //-----------------------------------------------------------------------------------------
  render() {
    const { state, onClick } = this;
    const { item, inputPessoa } = state;
    return (
      <div className="index">
        <div>
          <div className="container">
            <h1>Gerador de Pessoas</h1>
            <div className="data">
              <Input name="nome" label="Nome: " onClick={onClick} />
            </div>
            <div className="data">
              <Input name="sobrenome" label="Sobrenome: " onClick={onClick} />
            </div>
            <div className="data">
              <Input name="idade" label="Idade: " onClick={onClick} />
            </div>
            <div className="data">
              <Input name="cargo" label="Cargo: " onClick={onClick} />
            </div>

            <Button onClick={onClick}>Gerar</Button>

            <ListaView
              item={item}
              inputPessoa={inputPessoa}
              className="index"
            />
          </div>
        </div>
      </div>
    );
  }
}

const ListaView = (props) => (
  <div>
    <h1>Pessoas Geradas</h1>
    {props.item.map((item) => (
      <p key={item}>{item}</p>
    ))}
  </div>
);

export default GeraPessoa;
