/* Função para o funcionamento do menu lateral */
function toggleMenu(open) {
    var menu = document.getElementById('menu');
    if (open === true) {
        menu.style.width = '200px';
    } else if (open === false) {
        menu.style.width = '0';
    } else {
        menu.style.width = (menu.style.width === '200px') ? '0' : '200px';
    }
}
function closeMenu() {
    toggleMenu(false);
}
///////////////////////////////////////////////////////////////////////
function carregarDadosCSV() {
    const dadosCSV = `
    Estado;Cidade;Quantidade_de_Alunos;Quantidade_de_Escolas;Quantidade_de_Computadores;Quantidade_de_tablets;Quantidade_de_Projetores;Escolas_que_tem_Internet;Quantidade_de_Laboratórios;Quantidade_de_Lousas_Digital;Quantidade_que_usam_Plataformas_Digitais;Quantidade_de_Laboratóristas;Orçamento_Médio;Investimentos_em_TI2022;Investimento_em_TI2021
    Alagoas;Maceió;53000;814;24000;567;123;52000;450;780;45;20;150000;12000;10000
    Alagoas;Marechal Deodoro;10640;230;5000;443;132;9865;200;450;46;8;70000;5000;6000
    Alagoas;Rio Largo;19780;345;8000;333;145;18765;350;600;48;15;100000;8000;7000
    Alagoas;Arapiraca;15000;200;4500;300;80;12000;180;400;30;10;50000;4000;3000
    Alagoas;Palmeira dos Índios;18000;250;6000;400;100;15000;250;500;40;15;60000;5000;4500
    Bahia;Salvador;370000;1345;150000;5667;256;290000;2800;4500;79;120;800000;65000;49000
    Bahia;Lauro de Freitas;29000;265;14000;433;456;27999;650;1200;85;30;150000;15000;17000
    Bahia;Camaçari;36370;278;18000;567;456;34999;800;1500;15;40;200000;20000;25000
    Bahia;Feira de Santana;25000;320;11000;500;300;22000;400;700;50;18;120000;10000;12000
    Bahia;Itabuna;18000;230;9000;400;150;16000;300;500;40;15;80000;7000;8000
    Ceará;Fortaleza;293825;987;134000;4678;5664;276555;3200;5000;46;1000;600000;50000;56000
    Ceará;Caucaia;66000;453;33000;3556;653;55000;1200;1800;59;50;250000;25000;23000
    Ceará;Maracanaú;44000;398;22000;4566;456;36000;800;1500;8;30;120000;10000;12000
    Ceará;Juazeiro do Norte;28000;300;12000;345;200;24000;600;800;60;25;100000;8000;9000
    Ceará;Sobral;35000;400;16000;600;300;28000;750;1000;80;35;120000;10000;11000
    Maranhão;São Luís;177000;768;44000;2345;4566;135000;2000;3000;369;80;300000;30000;39000
    Maranhão;São José de Ribamar;31000;234;14500;4456;455;24000;450;800;58;20;80000;7000;6000
    Maranhão;Paço do Lumiar;21000;199;4567;4556;453;16777;200;400;95;10;40000;3000;4500
    Maranhão;Imperatriz;25000;300;11000;350;200;20000;550;900;70;30;80000;7000;7500
    Maranhão;Timon;18000;250;9000;300;150;16000;400;700;50;18;70000;6000;6500
    Paraíba;João Pessoa;113000;572;4565;466;4345;112000;1500;2300;56;60;200000;18000;20000
    Paraíba;Santa Rita;23838;348;3457;6778;354;20000;400;800;48;25;800000;7000;6500
    Paraíba;Bayeux;22200;234;11000;6785;654;15000;300;547;56;15;50000;5000;7000
    Paraíba;Campina Grande;30000;320;12000;556;400;25000;600;900;70;35;100000;8000;9000
    Paraíba;Patos;20000;250;8000;400;200;18000;450;700;50;20;80000;7000;7500
    Pernambuco;Recife;214000;1236;94555;4432;4667;213000;3500;658;25;120;500000;40000;43000
    Pernambuco;Olinda;25874;237;11111;4566;434;23000;600;245;14;25;100000;10000;9600
    Pernambuco;Jaboatão dos Guararapes;96000;349;45000;4566;353;95000;1200;269;65;40;150000;15000;14900
    Pernambuco;Caruaru;28000;300;12000;345;200;24000;600;800;60;25;120000;10000;11000
    Pernambuco;Petrolina;25000;270;11000;400;200;20000;550;900;70;30;80000;7000;7500
    Piauí;Teresina;177000;897;54000;3456;4325;166000;2000;358;25;70;250000;25000;30000
    Piauí;Picos;21000;176;9540;4556;456;20000;400;248;59;20;70000;7000;5000
    Piauí;Parnaíba;26700;300;9432;4456;557;25000;600;298;85;25;80000;8000;9000
    Piauí;Floriano;20000;250;8000;400;200;18000;450;700;50;20;80000;7000;7500
    Piauí;Campo Maior;18000;230;9000;300;150;16000;300;500;40;15;70000;6000;6500
    Sergipe;Aracaju;113000;689;36700;3456;4567;123000;1800;485;36;50;150000;12000;15000
    Sergipe;Nossa Senhora do socorro;31000;432;7604;3564;434;30000;800;974;4;30;70000;7000;10000
    Sergipe;São Cristóvão;25000;236;9654;4564;632;22000;500;365;48;20;80000;8000;9000
    Sergipe;Itabaiana;18000;250;9000;300;150;16000;400;700;50;18;70000;6000;6500
    Sergipe;Lagarto;15000;200;4500;300;80;12000;180;400;30;10;50000;4000;3000
    Rio Grande do Norte;Natal;57000;543;23456;5754;245;56000;800;647;26;35;100000;10000;11000
    Rio Grande do Norte;Parnamirim;34000;287;13000;2357;234;31000;450;562;65;45;240000;14000;16000
    Rio Grande do Norte;Mossoró;15000;165;4567;345;344;12000;784;745;84;78;140000;78000;90000
    Rio Grande do Norte;Caicó;18000;250;9000;300;150;16000;300;500;40;15;70000;6000;6500
    Rio Grande do Norte;Currais Novos;12000;180;7000;200;100;10000;250;400;30;10;50000;4000;3000
    
    `;
  
    const linhas = dadosCSV.trim().split('\n');
    const cabecalho = linhas[0].split(';').map(item => item.trim());
    const dados = [];

    for (let i = 1; i < linhas.length; i++) {
      const valores = linhas[i].split(';').map(item => item.trim());
      const obj = {};  

      for (let j = 0; j < cabecalho.length; j++) {
        obj[cabecalho[j]] = valores[j];
      }
      dados.push(obj);
    }
    return dados;
}
const dadosProcessados = carregarDadosCSV();
console.log(dadosProcessados);

function buscarGraficos() {
    const estadoSelecionado = document.getElementById('estado').value;
    ocultarConjuntoDeGraficos();
    const conjuntoGraficos = document.getElementById(`charts-${estadoSelecionado}`);
    if (conjuntoGraficos) {
        conjuntoGraficos.style.display = 'block';
    }
    if (estadoSelecionado === 'nordeste') {
        renderBarChartNordeste();
    } else if (estadoSelecionado === 'alagoas') {
        renderChartAlagoas();
    } else if (estadoSelecionado === 'bahia') {
        renderChartBahia();
    } else if (estadoSelecionado === 'ceara') {
        renderChartCeara();
    } else if (estadoSelecionado === 'maranhao') {
        renderChartMaranhao();
    } else if (estadoSelecionado === 'paraiba') {
        renderChartParaiba();
    } else if (estadoSelecionado === 'pernambuco') {
        renderChartPernambuco();
    } else if (estadoSelecionado === 'piaui') {
        renderChartPiaui();
    } else if (estadoSelecionado === 'sergipe') {
        renderChartSergipe();
    } else if (estadoSelecionado === 'riograndedonorte') {
        renderChartRioGrandeDoNorte();
    }
}
function ocultarConjuntoDeGraficos() {
    const conjuntos = document.querySelectorAll('.charts-estado');
    conjuntos.forEach(conjuntos => {
        conjuntos.style.display = 'none';
    });
}

function renderChartsByEstado(estado, dados) {
    renderBarChart(`escolas-${estado}`, dados, 'Escolas por Cidade', 'Quantidade_de_Escolas');
    renderLineChart(`alunos-${estado}`, dados, 'Alunos por Cidade', 'Quantidade_de_Alunos');
    renderDoughnutChart(`computadores-${estado}`, dados, 'Computadores por Cidade', 'Quantidade_de_Computadores');
    renderDoughnutChart(`tablets-${estado}`, dados, 'Tablets por Cidade', 'Quantidade_de_tablets');
    renderDoughnutChart(`projetores-${estado}`, dados, 'Projetores por Cidade', 'Quantidade_de_Projetores');
    renderBarChart(`laboratorios-${estado}`, dados, 'Laboratorios por Laboratorios', 'Quantidade_de_Laboratórios');
    renderLineChart(`orcamento-${estado}`, dados, 'Orçamento por Cidade', 'Orçamento_Médio');

    const dadosInvestimentos = dados.map(item => ({
        Cidade: item.Cidade,
        Investimento_2021: parseInt(item.Investimento_em_TI2021, 10),
        Investimento_2022: parseInt(item.Investimentos_em_TI2022, 10)
    }));

    renderInvestmentChart(dadosInvestimentos, `investimentos-${estado}`);
}

function renderChartAlagoas() {
    const dadosAlagoas = dadosProcessados.filter(dado => ['Maceió', 'Marechal Deodoro', 'Rio Largo', 'Arapiraca', 'Palmeira dos Índios'].includes(dado.Cidade));
    renderChartsByEstado('alagoas', dadosAlagoas);
}
function renderChartBahia() {
    const dadosBahia = dadosProcessados.filter(dado => ['Salvador', 'Lauro de Freitas', 'Camaçari', 'Feira de Santana', 'Itabuna'].includes(dado.Cidade));
    renderChartsByEstado('bahia', dadosBahia);
}
function renderChartCeara() {
    const dadosCeara = dadosProcessados.filter(dado => ['Fortaleza', 'Caucaia', 'Maracanaú', 'Juazeiro do Norte', 'Sobral'].includes(dado.Cidade));
    renderChartsByEstado('ceara', dadosCeara);
}

function renderChartMaranhao() {
    const dadosMaranhao = dadosProcessados.filter(dado => ['São Luís', 'São José de Ribamar', 'Paço do Lumiar', 'Imperatriz', 'Timon'].includes(dado.Cidade));
    renderChartsByEstado('maranhao', dadosMaranhao);
}

function renderChartParaiba() {
    const dadosParaiba = dadosProcessados.filter(dado => ['João Pessoa', 'Santa Rita', 'Bayeux', 'Campina Grande', 'Patos'].includes(dado.Cidade));
    renderChartsByEstado('paraiba', dadosParaiba);
}

function renderChartPernambuco() {
    const dadosPernambuco = dadosProcessados.filter(dado => ['Recife', 'Olinda', 'Jaboatão dos Guararapes', 'Caruaru', 'Petrolina'].includes(dado.Cidade));
    renderChartsByEstado('pernambuco', dadosPernambuco);
}
function renderChartPiaui() {
    const dadosPiaui = dadosProcessados.filter(dado => ['Teresina', 'Picos', 'Parnaíba', 'Floriano', 'Campo Maior'].includes(dado.Cidade));
    renderChartsByEstado('piaui', dadosPiaui);
}
function renderChartSergipe() {
    const dadosSergipe = dadosProcessados.filter(dado => ['Aracaju', 'Nossa Senhora do Socorro', 'São Cristóvão', 'Itabaiana', 'Lagarto'].includes(dado.Cidade));
    renderChartsByEstado('sergipe', dadosSergipe);
}
function renderChartRioGrandeDoNorte() {
    const dadosRioGrandeDoNorte = dadosProcessados.filter(dado => ['Natal', 'Parnamirim', 'Mossoró', 'Caicó', 'Currais Novos'].includes(dado.Cidade));
    renderChartsByEstado('rio-grande-do-norte', dadosRioGrandeDoNorte);
}
function renderInvestmentChart(data, chartId) {
    const ctx = document.getElementById(chartId).getContext('2d');

    const chartData = {
        labels: data.map(item => item.Cidade),
        datasets: [
            {
                label: 'Investimento 2021',
                data: data.map(item => item.Investimento_2021),
                backgroundColor: 'blue',
                borderColor: 'blue',
                borderWidth: 1,
                fill: false,
                yAxisID: 'y-axis-1'
            },
            {
                label: 'Investimento 2022',
                data: data.map(item => item.Investimento_2022),
                backgroundColor: 'pink',
                borderColor: 'pink',
                borderWidth: 1,
                fill: false,
                yAxisID: 'y-axis-2'
            }
        ]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions
    });
}

function renderChartsNordeste() {
    console.log('Renderizando gráficos para o Nordeste');
    const dadosNordeste = dadosProcessados.filter(dado => ['Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Sergipe'].includes(dado.Estado));

    const dadosAgregadosPorEstado = dadosNordeste.reduce((agregado, atual) => {
        if (!agregado[atual.Estado]) {
            agregado[atual.Estado] = {
                Estado: atual.Estado,
                Quantidade_de_Escolas: 0,
                Quantidade_de_Alunos: 0,
                Quantidade_de_Computadores: 0,
                Quantidade_de_tablets: 0,
                Quantidade_de_Projetores: 0,
                Quantidade_de_Laboratórios: 0,
                Orçamento_Médio: 0,
                Investimento_em_TI2021: 0,
                Investimento_em_TI2022: 0
            };
        }

        agregado[atual.Estado].Quantidade_de_Escolas += parseInt(atual.Quantidade_de_Escolas, 10);
        agregado[atual.Estado].Quantidade_de_Alunos += parseInt(atual.Quantidade_de_Alunos, 10);
        agregado[atual.Estado].Quantidade_de_Computadores += parseInt(atual.Quantidade_de_Computadores, 10);
        agregado[atual.Estado].Quantidade_de_tablets += parseInt(atual.Quantidade_de_tablets, 10);
        agregado[atual.Estado].Quantidade_de_Projetores += parseInt(atual.Quantidade_de_Projetores, 10);
        agregado[atual.Estado].Quantidade_de_Laboratórios += parseInt(atual.Quantidade_de_Laboratórios, 10);
        agregado[atual.Estado].Orçamento_Médio += parseInt(atual.Orçamento_Médio, 10);
        agregado[atual.Estado].Investimento_em_TI2021 += parseInt(atual.Investimento_em_TI2021, 10);
        agregado[atual.Estado].Investimento_em_TI2022 += parseInt(atual.Investimentos_em_TI2022, 10);
        return agregado;
    
    }, {});

    const dadosAgregadosArray = Object.values(dadosAgregadosPorEstado);
    
    renderBarChartNordeste('escolas-nordeste', dadosAgregadosArray, 'Escolas por Estado', 'Quantidade_de_Escolas');
    renderLineChartNordeste('alunos-nordeste', dadosAgregadosArray, 'Alunos por Estado', 'Quantidade_de_Alunos');
    renderDoughnutChartNordeste('computadores-nordeste', dadosAgregadosArray, 'Computadores por Estado', 'Quantidade_de_Computadores');
    renderDoughnutChartNordeste('tablets-nordeste', dadosAgregadosArray, 'Tablets por Estado', 'Quantidade_de_tablets');
    renderDoughnutChartNordeste('projetores-nordeste', dadosAgregadosArray, 'Projetores por Estado', 'Quantidade_de_Projetores');
    renderBarChartNordeste('laboratorios-nordeste', dadosAgregadosArray, 'Laboratorios por Estado', 'Quantidade_de_Laboratórios');
    renderLineChartNordeste('orcamentos-nordeste', dadosAgregadosArray, 'Orçamento por Estado', 'Orçamento_Médio');

    const investimentoData = dadosAgregadosArray.map(item => ({
        Estado: item.Estado,
        Investimento_2021: parseInt(item.Investimento_em_TI2021, 10),
        Investimento_2022: parseInt(item.Investimento_em_TI2022, 10)
    }));

    renderInvestmentChartNordeste(investimentoData);
}
function renderInvestmentChartNordeste(data) {
    const ctx = document.getElementById('investimentos-nordeste').getContext('2d');

    const chartData = {
        labels: data.map(item => item.Estado),
        datasets: [
            {
                label: 'Investimento 2021',
                data: data.map(item => item.Investimento_2021),
                backgroundColor: 'blue',
                borderColor: 'blue',
                borderWidth: 1,
                fill: false
            },
            {
                label: 'Investimento 2022',
                data: data.map(item => item.Investimento_2022),
                backgroundColor: 'pink',
                borderColor: 'pink',
                borderWidth: 1,
                fill: false
            }
        ]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions
    });
}

// GRAFICOS DO NORDESTE
function renderLineChartNordeste(canvasId, data, label, dataKey) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    const chartData = {
        labels: data.map(item => item.Estado),
        datasets: [{
            label: label,
            data: data.map(item => item[dataKey]),
            borderColor: 'green', // escolha a cor desejada
            borderWidth: 2,
            fill: false
        }]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions
    });
}

// Função auxiliar para renderizar gráfico de barras
function renderBarChartNordeste(canvasId, data, label, dataKey) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    const chartData = {
        labels: data.map(item => item.Estado),
        datasets: [{
            label: label,
            data: data.map(item => item[dataKey]),
            backgroundColor: 'orange',
            borderColor: 'orange',
            borderWidth: 1
        }]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions
    });
}

// Função auxiliar para renderizar gráfico de doughnut
function renderDoughnutChartNordeste(canvasId, data, category, dataKey) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    const chartData = {
        labels: data.map(item => item.Estado),
        datasets: [{
            label: category,
            data: data.map(item => item[dataKey]),
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 205, 86, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(153, 102, 255, 0.7)',
            ]
        }]
    };

    new Chart(ctx, {
        type: 'doughnut',
        data: chartData
    });
}

// GRAFICOS ESTADOS
function renderLineChart(canvasId, data, label, dataKey) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    const chartData = {
        labels: data.map(item => item.Cidade),
        datasets: [{
            label: label,
            data: data.map(item => item[dataKey]),
            borderColor: 'green', // escolha a cor desejada
            borderWidth: 2,
            fill: false
        }]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions
    });
}
function renderBarChart(canvasId, data, label, dataKey) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    const chartData = {
        labels: data.map(item => item.Cidade),
        datasets: [{
            label: label,
            data: data.map(item => item[dataKey]),
            backgroundColor: 'orange',
            borderColor: 'orange',
            borderWidth: 1
        }]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions
    });
}
function renderDoughnutChart(canvasId, data, category, dataKey) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    const chartData = {
        labels: data.map(item => item.Cidade),
        datasets: [{
            label: category,
            data: data.map(item => item[dataKey]),
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 205, 86, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(153, 102, 255, 0.7)',
            ]
        }]
    };

    new Chart(ctx, {
        type: 'doughnut',
        data: chartData
    });
}

document.addEventListener('DOMContentLoaded', function () {
    renderChartsNordeste('nordeste');
    document.getElementById('estado').addEventListener('change', function () {
        const estadoSelecionado = this.value.toLowerCase();
        renderChartsByEstado(estadoSelecionado);
    });
}); 