import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link as Link$1 } from 'react-router-dom';
import { Row, Typography, Col } from 'antd';
import { LockOutlined, SafetyOutlined } from '@ant-design/icons';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const Link = ({
  to = "#",
  ...rest
}) => /^https?:\/\//.test(to) ? /*#__PURE__*/React.createElement("a", _extends({
  href: to
}, rest)) : /*#__PURE__*/React.createElement(Link$1, _extends({
  to: to
}, rest));

Link.propTypes = {
  to: PropTypes.string
};

const Body = props => {
  const {
    children,
    style,
    size = {
      bottom: 144
    },
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Row, {
    justify: "center",
    style: {
      minHeight: `calc(calc(100vh - calc(100vh - 100%)) - ${size.bottom}px)`,
      width: "100%",
      padding: "0 8px"
    }
  }, /*#__PURE__*/React.createElement(Row, _extends({
    style: {
      maxWidth: "1116px",
      width: "100%",
      padding: "16px 0px",
      flexDirection: "column",
      ...style
    }
  }, rest), children));
};

Body.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  style: PropTypes.object,
  size: PropTypes.object
};

const Widget = function (props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#ffffff",
      boxShadow: "0px 0px 10px 0px #ddd",
      marginBottom: "16px",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
      ...props.style
    }
  }, props.children);
}; // widget
// header


function HeaderContent(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "40px",
      display: "flex",
      alignItems: "center",
      margin: "0 10px"
    }
  }, props.children);
}

const HeaderIcon = function (props) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      marginRight: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, props), props.children);
};

function HeaderText(props) {
  const {
    children,
    style
  } = props;
  return /*#__PURE__*/React.createElement("h3", _extends({}, props, {
    style: {
      margin: "0",
      fontWeight: "bold",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      ...style
    }
  }), children);
}

HeaderText.propTypes = {
  children: PropTypes.node,
  style: PropTypes.node
};

const HeaderStatus = function (props) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      flex: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, props), props.children);
};

HeaderStatus.propTypes = {
  children: PropTypes.node
};

function HeaderOption(props) {
  const {
    children,
    isIcon
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      marginRight: isIcon && "-5px"
    }
  }, children);
}

HeaderOption.propTypes = {
  children: PropTypes.node,
  isIcon: PropTypes.bool
};
HeaderContent.Icon = HeaderIcon;
HeaderContent.Text = HeaderText;
HeaderContent.Status = HeaderStatus;
HeaderContent.Option = HeaderOption; // header
// body

function BodyContent(props) {
  const {
    children,
    style
  } = props;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      flex: "1",
      padding: "8px 16px 16px 16px",
      ...style
    }
  }), children);
}

BodyContent.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}; // body
// footer

function FooterContent(props) {
  const {
    children,
    style
  } = props;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      backgroundColor: "rgb(245, 245, 245)",
      display: "flex",
      justifyContent: "flex-end",
      padding: "16px",
      marginTop: "8px",
      ...style
    }
  }), children);
}

FooterContent.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}; // footer

Widget.Header = HeaderContent;
Widget.Body = BodyContent;
Widget.Footer = FooterContent;

const Privacy = props => {
  return [/*#__PURE__*/React.createElement(Row, {
    justify: "center"
  }, /*#__PURE__*/React.createElement(Typography.Title, null, /*#__PURE__*/React.createElement(LockOutlined, {
    style: {
      fontSize: "55px"
    }
  }), "  ", "Pol\xEDtica de Privacidade")), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    xs: 24,
    md: 24
  }, /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Acreditamos que voc\xEA sempre deve saber quais dados coletamos de voc\xEA e como os usamos, e que voc\xEA deve ter um controle significativo sobre isso. Queremos capacit\xE1-lo para tomar as melhores decis\xF5es sobre as informa\xE7\xF5es que voc\xEA compartilha conosco."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Esse \xE9 o objetivo desta Pol\xEDtica de Privacidade."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "Voc\xEA deve ler esta pol\xEDtica na \xEDntegra, mas aqui est\xE3o algumas coisas importantes que esperamos que voc\xEA guarde:"), /*#__PURE__*/React.createElement(List, null, /*#__PURE__*/React.createElement(List.Item, null, "Nossa Empresa \xE9 p\xFAblica e parte de seu conte\xFAdo estar\xE1 imediatamente vis\xEDveis e pesquis\xE1veis por qualquer pessoa em todo o mundo. Tamb\xE9m oferecemos a voc\xEA maneiras n\xE3o p\xFAblicas de se comunicar em nossos Servi\xE7os, por meio de Mensagens Diretas. Voc\xEA tamb\xE9m pode usar nossos Servi\xE7os sob um pseud\xF4nimo se preferir n\xE3o usar seu nome."), /*#__PURE__*/React.createElement(List.Item, null, "Quando voc\xEA usar nossos Servi\xE7os, mesmo que esteja somente olhando seu conte\xFAdo, recebemos algumas informa\xE7\xF5es pessoais de voc\xEA, como o tipo de dispositivo que voc\xEA est\xE1 usando e o seu endere\xE7o IP. Voc\xEA pode optar por compartilhar informa\xE7\xF5es adicionais conosco, como seu endere\xE7o de e-mail, n\xFAmero de telefone, contatos do cat\xE1logo de endere\xE7os e um perfil p\xFAblico. Usamos essas informa\xE7\xF5es para coisas como manter sua conta segura e mostrar a voc\xEA Conte\xFAdos mais relevantes, pessoas para seguir, eventos e an\xFAncios."), /*#__PURE__*/React.createElement(List.Item, null, "Fornecemos controle a voc\xEA por meio de suas configura\xE7\xF5es para limitar os dados que coletamos de voc\xEA e como os usamos, al\xE9m de controlar itens como seguran\xE7a da conta, prefer\xEAncias de marketing, aplicativos que podem acessar sua conta e contatos do cat\xE1logo de endere\xE7os que voc\xEA subiu em nossos Servi\xE7os. Voc\xEA tamb\xE9m pode fazer o download das informa\xE7\xF5es que voc\xEA compartilhou em nossos Servi\xE7os."), /*#__PURE__*/React.createElement(List.Item, null, "Al\xE9m das informa\xE7\xF5es que voc\xEA compartilha conosco, usamos seus Conte\xFAdos o conte\xFAdo que voc\xEA leu, Curtiu ou fez realizou uma intere\xE7\xE3o, e outras informa\xE7\xF5es para determinar em quais t\xF3picos voc\xEA est\xE1 interessado, sua idade, os idiomas que voc\xEA fala e outros sinais para mostrar conte\xFAdo mais relevante para voc\xEA. N\xF3s oferecemos transpar\xEAncia nessas informa\xE7\xF5es, e voc\xEA pode modific\xE1-las ou corrigi-las a qualquer momento."), /*#__PURE__*/React.createElement(List.Item, null, "Se voc\xEA tiver d\xFAvidas sobre esta pol\xEDtica, sobre como coletamos ou processamos seus dados pessoais ou sobre qualquer outra coisa relacionada a nossas pr\xE1ticas de privacidade, gostar\xEDamos de saber a sua opini\xE3o. Voc\xEA pode entrar em contato conosco a qualquer momento.")), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Voc\xEA pode utilizar os Servi\xE7os somente se concordar em celebrar um contrato vinculante com nossa Empresa e n\xE3o for uma pessoa impedida de receber servi\xE7os sob as leis da jurisdi\xE7\xE3o aplic\xE1vel. Em qualquer hip\xF3tese, voc\xEA deve ter no m\xEDnimo 13 anos de idade, para utilizar os Servi\xE7os. Se estiver aceitando estes Termos e utilizando os Servi\xE7os em nome de uma empresa, organiza\xE7\xE3o, governo ou outra entidade legal, voc\xEA declara e garante que est\xE1 autorizado a realizar tal a\xE7\xE3o e que tem poderes para vincular referida entidade a estes Termos, hip\xF3tese em que as palavras \"voc\xEA\" e \"seu\" conforme utilizadas nestes Termos far\xE3o refer\xEAncia a tal entidade."), /*#__PURE__*/React.createElement(Typography.Title, null, "1. Informa\xE7\xF5es que voc\xEA compartilha conosco"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "N\xF3s requeremos determinadas informa\xE7\xF5es para fornecer nossos servi\xE7os para voc\xEA. Por exemplo, voc\xEA precisa ter uma conta para subir ou compartilhar conte\xFAdo em nossa Empresa. Quando voc\xEA optar por compartilhar as informa\xE7\xF5es abaixo conosco, n\xF3s as coletaremos e usaremos para operar nossos servi\xE7os."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "1.1 Informa\xE7\xF5es B\xE1sicas da Conta"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Voc\xEA n\xE3o precisa criar uma conta para usar alguns dos recursos dos nossos servi\xE7os, como buscar e visualizar perfis p\xFAblicos de usu\xE1rios em nossa Empresa. Se voc\xEA optar por criar uma conta, voc\xEA precisa nos fornecer alguns dados pessoais para que possamos fornecer nossos servi\xE7os a voc\xEA. Em nossa Empresa, isso inclui um nome de exibi\xE7\xE3o (por exemplo, \u201CMomentos\u201D), um nome de usu\xE1rio (por exemplo, @Momentos), uma senha e um endere\xE7o de e-mail ou n\xFAmero de telefone. Seu nome de exibi\xE7\xE3o e nome de usu\xE1rio s\xE3o sempre p\xFAblicos, mas voc\xEA pode usar seu nome real ou um pseud\xF4nimo. Voc\xEA tamb\xE9m pode criar e gerenciar m\xFAltiplas contas em nossa Empresa, por exemplo, para expressar diferentes partes de sua identidade."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "1.2 Informa\xE7\xF5es P\xFAblicas"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "uma parte das atividades em nossa Empresa \xE9 p\xFAblica, inclusive suas informa\xE7\xF5es de perfil, seu fuso-hor\xE1rio e idioma, quando voc\xEA criou a sua conta e seus Conte\xFAdo e determinadas informa\xE7\xF5es sobre seus Conte\xFAdos como a data, hor\xE1rio, aplicativo e vers\xE3o de nossos Servi\xE7os onde voc\xEA fez seu Conte\xFAdo. Voc\xEA tamb\xE9m pode optar por publicar a sua localiza\xE7\xE3o nos seus Conte\xFAdos e no seu perfil em nossa Empresa. Se voc\xEA gostar, compartilhar, responder ou se envolver publicamente com um an\xFAncio em nossos servi\xE7os, esse anunciante poder\xE1, assim, aprender informa\xE7\xF5es sobre voc\xEA associadas ao an\xFAncio com o qual voc\xEA se envolveu, como caracter\xEDsticas do p\xFAblico-alvo que o an\xFAncio deveria atingir. Seus cora\xE7\xF5es, coment\xE1rios, o n\xFAmero de cora\xE7\xF5es que voc\xEA recebeu, vota\xE7\xF5es, as contas das quais voc\xEA \xE9 um Superfan, e se voc\xEA assistiu a uma transmiss\xE3o ao vivo ou em replay, tamb\xE9m s\xE3o p\xFAblicos. Quaisquer cora\xE7\xF5es, coment\xE1rios ou outro conte\xFAdo que voc\xEA contribuir para a transmiss\xE3o de outra conta permanecer\xE3o sendo parte daquela transmiss\xE3o enquanto ela permanecer no Periscope. Informa\xE7\xF5es publicadas sobre voc\xEA por outras pessoas que usam nossos servi\xE7os tamb\xE9m podem ser p\xFAblicas. Por exemplo, outras pessoas podem marc\xE1-lo em uma foto (se suas configura\xE7\xF5es permitirem) ou mencion\xE1-lo em um Conte\xFAdo."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Ao compartilhar publicamente um conte\xFAdo atrav\xE9s de um Conte\xFAdo, voc\xEA est\xE1 nos instruindo a divulgar essas informa\xE7\xF5es da maneira mais ampla poss\xEDvel, inclusive por meio de nossas APIs, e direcionando \xE0queles que acessam as informa\xE7\xF5es por meio de nossas APIs a fazer o mesmo. Para facilitar a r\xE1pida dissemina\xE7\xE3o global de Conte\xFAdos para pessoas em todo o mundo, usamos tecnologias coinforma\xE7\xF5esmo interfaces de programa\xE7\xE3o de aplicativos (APIs) e incorporamos para disponibilizar algumas dessas para sites, aplicativos e para outros usos - por exemplo, para exibir Conte\xFAdo em um site de not\xEDcias ou analisar o que as pessoas dizem em nosso Servi\xE7o. Geralmente, disponibilizamos esse conte\xFAdo em quantidades limitadas gratuitamente e cobramos taxas de licenciamento para acesso em larga escala. Temos termos padr\xE3o que governam como esses dados podem ser usados e um programa de conformidade para aplicar esses termos. Mas esses indiv\xEDduos e empresas n\xE3o s\xE3o afiliados a nossa Empresa, e suas ofertas podem n\xE3o refletir as atualiza\xE7\xF5es que voc\xEA faz em nossa Empresa."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "1.3 Informa\xE7\xF5es de Contato e Cat\xE1logos de Endere\xE7os"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Usamos suas informa\xE7\xF5es de contato, como seu endere\xE7o de e-mail ou n\xFAmero de telefone, para autenticar sua conta e mant\xEA-la, e para manter os nossos servi\xE7os, em seguran\xE7a e para ajudar a prevenir spam, fraude e abuso. Tamb\xE9m usamos informa\xE7\xF5es de contato para personalizar nossos servi\xE7os, habilitar certos recursos da conta (por exemplo, para verifica\xE7\xE3o de acesso ou via SMS), para enviar informa\xE7\xF5es sobre nossos servi\xE7os e personalizar nossos servi\xE7os, incluindo an\xFAncios. Se voc\xEA fornecer a nossa Empresa seu n\xFAmero de telefone, voc\xEA concorda em receber mensagens de texto de nossa Empresa nesse n\xFAmero, conforme permitido pelas leis do seu pa\xEDs. Nossa Empresa tamb\xE9m usa suas informa\xE7\xF5es de contato para direcionar marketing a voc\xEA conforme as leis do seu pa\xEDs permitirem, e para ajudar outras pessoas a encontrar sua conta, se suas configura\xE7\xF5es permitirem, inclusive por meio de servi\xE7os de terceiros e aplicativos clientes. Voc\xEA poder\xE1 utilizar suas configura\xE7\xF5es de notifica\xE7\xF5es por e-mail e por celular para controlar as notifica\xE7\xF5es que receber de nossa Empresa. Voc\xEA tamb\xE9m poder\xE1 descontinuar o recebimento de uma notifica\xE7\xE3o seguindo as instru\xE7\xF5es contidas na notifica\xE7\xE3o ou aqui."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Voc\xEA pode escolher fazer o upload e sincronizar sua lista de contatos em nossa Empresa para que possamos ajud\xE1-lo a encontrar e a se conectar com pessoas que voc\xEA conhe\xE7a, ou ajudar outras pessoas a encontrar e se conectar com voc\xEA. Tamb\xE9m usamos essas informa\xE7\xF5es para recomendar melhor o conte\xFAdo para voc\xEA e outras pessoas."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Voc\xEA pode se registrar em nossa Empresa com uma conta de outro servi\xE7o como Twitter, Google ou Facebook. Se voc\xEA fizer isso, usaremos as informa\xE7\xF5es desse servi\xE7o, inclusive seu endere\xE7o de e-mail, amigos ou lista de contatos, para recomendar outras contas ou conte\xFAdo para voc\xEA, ou para recomendar sua conta ou conte\xFAdo para outras pessoas. Voc\xEA pode controlar se a sua conta no Periscope pode ser descoberta por e-mail por meio de suas configura\xE7\xF5es do Periscope."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Caso voc\xEA entre em contato conosco por e-mail, n\xF3s manteremos o conte\xFAdo da sua mensagem, seu endere\xE7o de e-mail e suas informa\xE7\xF5es de contato para responder \xE0 sua solicita\xE7\xE3o."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "1.4 Mensagens Diretas e Comunica\xE7\xF5es N\xE3o P\xFAblicas"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Fornecemos determinados recursos que permitem que voc\xEA possa se comunicar de maneira mais privada ou controlar quem v\xEA o seu conte\xFAdo. Por exemplo, voc\xEA pode usar Mensagens Diretas para ter conversas n\xE3o p\xFAblicas em nossa Empresa. Quando voc\xEA se comunicar com outras pessoas ao enviar e receber Mensagens Diretas, n\xF3s armazenaremos e processaremos suas comunica\xE7\xF5es e informa\xE7\xF5es relacionadas a elas. Isso inclui a verifica\xE7\xE3o de links para conte\xFAdo nocivo, a redu\xE7\xE3o de links, a detec\xE7\xE3o de spam, abuso, imagens proibidas, e uso de problemas relatados. Tamb\xE9m usamos informa\xE7\xF5es sobre com quem voc\xEA se comunicou e quando (mas n\xE3o o conte\xFAdo dessas comunica\xE7\xF5es) para entender melhor o uso de nossos servi\xE7os, para proteger a seguran\xE7a e integridade de nossa plataforma e para mostrar conte\xFAdo mais relevante. N\xF3s compartilhamos o conte\xFAdo de suas Mensagens Diretas com as pessoas para as quais voc\xEA as enviou; n\xF3s n\xE3o os usamos para veicular an\xFAncios. Observe que, se voc\xEA interagir de uma maneira que seja normalmente p\xFAblica com conte\xFAdo de nossos Servi\xE7os compartilhado com voc\xEA por Mensagem Direta, por exemplo, ao curtir um Conte\xFAdo, essas intera\xE7\xF5es ser\xE3o p\xFAblicas. Quando voc\xEA usar recursos como Mensagens Diretas para se comunicar, lembre-se de que os destinat\xE1rios t\xEAm sua pr\xF3pria c\xF3pia de suas comunica\xE7\xF5es de nossos Servi\xE7os - mesmo que voc\xEA exclua sua c\xF3pia dessas mensagens da sua conta - que eles podem duplicar, armazenar ou compartilhar novamente."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "1.5 Informa\xE7\xF5es de Pagamento"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Voc\xEA pode nos fornecer informa\xE7\xF5es de pagamento, inclusive seu n\xFAmero de cart\xE3o de cr\xE9dito ou d\xE9bito, data de validade do cart\xE3o, c\xF3digo de valida\xE7\xE3o e endere\xE7o de faturamento, para comprar publicidade ou outras ofertas fornecidas como parte de nossos servi\xE7os."), /*#__PURE__*/React.createElement(Typography.Title, null, "2. Informa\xE7\xF5es Adicionais que Recebemos Sobre Voc\xEA"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Recebemos determinadas informa\xE7\xF5es quando voc\xEA usa nossos servi\xE7os ou outros sites ou aplicativos m\xF3veis que incluem nosso conte\xFAdo e de terceiros, inclusive anunciantes. Assim como as informa\xE7\xF5es que voc\xEA compartilha conosco, usamos os dados abaixo para operar nossos servi\xE7os."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "2.1 Informa\xE7\xF5es de Localiza\xE7\xE3o"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "N\xF3s requeremos informa\xE7\xF5es sobre seu registro e localiza\xE7\xE3o atual, que obtemos de sinais como seu endere\xE7o IP ou configura\xE7\xF5es do dispositivo, para configurar e manter sua conta com seguran\xE7a e confiabilidade e para fornecer nossos servi\xE7os a voc\xEA."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Sujeito \xE0s suas configura\xE7\xF5es, podemos coletar, usar e armazenar informa\xE7\xF5es adicionais sobre sua localiza\xE7\xE3o, como sua posi\xE7\xE3o exata atual ou locais onde voc\xEA usou anteriormente, para operar ou personalizar nossos servi\xE7os, inclusive com conte\xFAdo mais relevante, como tend\xEAncias locais, hist\xF3rias, an\xFAncios e sugest\xF5es de pessoas para seguir."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "2.2 Links"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Para operar nossos servi\xE7os, acompanhamos como voc\xEA interage com os links em nossos servi\xE7os. Isso inclui links em e-mails que enviamos a voc\xEA e links em Conte\xFAdos que aparecem em outros sites ou aplicativos m\xF3veis."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Se voc\xEA clicar em um link ou an\xFAncio externo em nossos servi\xE7os, esse anunciante ou operador de site poder\xE1 inferir que voc\xEA veio de nossos Servi\xE7os, al\xE9m de outras informa\xE7\xF5es associadas ao an\xFAncio em que voc\xEA clicou, como caracter\xEDsticas do p\xFAblico destinado a ser alcan\xE7ado. Eles tamb\xE9m podem coletar de voc\xEA outros dados pessoais, como identificadores de cookies ou seu endere\xE7o IP."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "2.3 Cookies"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Um cookie \xE9 um pequeno arquivo de dados que \xE9 armazenado em seu computador ou dispositivo m\xF3vel. Como muitos sites, usamos cookies e tecnologias semelhantes para coletar dados adicionais de uso do site e para operar nossos servi\xE7os. Os cookies n\xE3o s\xE3o requeridos para muitas partes de nossos servi\xE7os, como buscar e consultar perfis p\xFAblicos. Embora a maioria dos navegadores da Web aceite cookies automaticamente, as configura\xE7\xF5es de muitos navegadores podem ser modificadas para recusar cookies ou alert\xE1-lo quando um site estiver tentando inserir um cookie em seu computador. No entanto, \xE9 poss\xEDvel que alguns de nossos Servi\xE7os n\xE3o funcionem adequadamente se voc\xEA desativar os cookies. Quando seu navegador ou dispositivo permitir, n\xF3s usaremos cookies de sess\xE3o e cookies persistentes para entender melhor como voc\xEA interage com nossos servi\xE7os, monitorar padr\xF5es de uso agregados, personalizar e operar nossos servi\xE7os, fornecer seguran\xE7a de conta, personalizar o conte\xFAdo que mostramos a voc\xEA, inclusive an\xFAncios, e lembrar suas prefer\xEAncias de idioma. N\xF3s n\xE3o oferecemos suporte \xE0 op\xE7\xE3o de navegador N\xE3o Rastrear. Saiba mais sobre como usamos cookies e outras tecnologias semelhantes aqui."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "2.4 Dados de Registro"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "N\xF3s recebemos informa\xE7\xF5es quando voc\xEA visualiza conte\xFAdo em ou interage com nossos servi\xE7os, o que n\xF3s chamamos de \u201CDados de Registro\u201D, mesmo se n\xE3o tiver criado uma conta. Por exemplo, quando voc\xEA visita os nossos sites, acessa os nossos servi\xE7os, interage com as nossas notifica\xE7\xF5es por e-mail, utiliza a sua conta para se autenticar em um site, aplicativo ou servi\xE7o de terceiro, ou quando visita um site, aplicativo ou servi\xE7o de terceiro que inclua conte\xFAdo de nossos Servicos, podemos receber informa\xE7\xF5es sobre voc\xEA. Esses Dados de Registro podem incluir informa\xE7\xF5es como o seu endere\xE7o IP, tipo de navegador, sistema operacional, p\xE1gina da Web de origem, p\xE1ginas da Web visitadas, localiza\xE7\xE3o, sua operadora de telefonia celular, informa\xE7\xF5es de dispositivo (inclusive Ids de dispositivo e aplicativos), termos de pesquisa (incluindo aqueles que n\xE3o foram enviados como consultas) e informa\xE7\xF5es de cookies. Tamb\xE9m recebemos Dados de Registro quando voc\xEA clica, visualiza ou interage com links em nossos servi\xE7os, inclusive quando voc\xEA instala outro aplicativo por meio de nossos Servi\xE7os. Usamos os Dados de Registro para operar nossos servi\xE7os e assegurar seu desempenho seguro, confi\xE1vel e robusto. Por exemplo, usamos os Dados de Registro para proteger a seguran\xE7a das contas e para determinar qual conte\xFAdo \xE9 popular em nossos servi\xE7os. Tamb\xE9m usamos esses dados para melhorar o conte\xFAdo que mostramos a voc\xEA, inclusive an\xFAncios para melhorar a efic\xE1cia de nosso pr\xF3prio marketing."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Usamos as informa\xE7\xF5es que voc\xEA nos fornece e os dados que recebemos, inclusive Dados de Registro e dados de terceiros, para fazer infer\xEAncias sobre quais t\xF3picos voc\xEA pode estar interessado, sua idade e os idiomas que voc\xEA fala. Isso nos ajuda a promover e desenhar melhor nossos servi\xE7os para voc\xEA e a personalizar o conte\xFAdo que mostramos, inclusive an\xFAncios."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "2.5 Dados de nossos Servi\xE7os para a Web"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Quando voc\xEA visualiza nosso conte\xFAdo em sites de terceiros que integram o conte\xFAdo de nossos Servi\xE7os, como linhas de tempo incorporadas ou bot\xF5es de compartilhamento, podemos receber Dados de Registro que incluem a p\xE1gina da Web que voc\xEA visitou. Usamos essas informa\xE7\xF5es para entender melhor o uso de nossos servi\xE7os, para proteger a seguran\xE7a e integridade de nossa plataforma e para mostrar conte\xFAdo mais relevante, inclusive an\xFAncios. N\xE3o associamos esse hist\xF3rico de navega\xE7\xE3o da Web com seu nome, endere\xE7o de e-mail, n\xFAmero de telefone ou nome de usu\xE1rio, e o exclu\xEDmos, obliteramos ou agregamos ap\xF3s 30 dias. N\xE3o coletamos esses dados de navegadores que acreditamos estar localizados na Uni\xE3o Europeia ou nos pa\xEDses da Associa\xE7\xE3o de Livre Com\xE9rcio Europeia."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "2.6 Anunciantes e Outros Parceiros de Publicidade"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "A receita de publicidade nos permite prestar suporte e melhorar nossos servi\xE7os. N\xF3s podemos utilizar as informa\xE7\xF5es descritas nesta Pol\xEDtica de Privacidade para ajudar a tornar nossa publicidade mais relevante para voc\xEA, para medir sua efic\xE1cia e para ajudar a reconhecer seus dispositivos para podermos fornecer an\xFAncios a voc\xEA dentro e fora de nossos Servi\xE7os. Nossos parceiros de publicidade e afiliadas compartilham conosco informa\xE7\xF5es como ID do cookie do navegador, ID do dispositivo m\xF3vel ou hash criptogr\xE1fico de um endere\xE7o de e-mail, assim como dados demogr\xE1ficos ou de interesse e conte\xFAdo visualizado ou a\xE7\xF5es tomadas em um site ou aplicativo. Alguns de nossos parceiros de publicidade, especialmente nossos anunciantes, tamb\xE9m nos permitem coletar informa\xE7\xF5es similares diretamente de seu site ou aplicativo ao integrar nossa tecnologia de publicidade. As informa\xE7\xF5es compartilhadas por parceiros e afiliados de an\xFAncios ou coletadas por nossos Servi\xE7os a partir de sites e aplicativos de parceiros e afiliados de an\xFAncios podem ser combinadas com as outras informa\xE7\xF5es que voc\xEA compartilha com o nossos Servi\xE7os e que nossos Servi\xE7os recebe sobre voc\xEA descrito em outra parte da nossa Pol\xEDtica de Privacidade."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Nossos Servi\xE7os aderem aos Princ\xEDpios de Autorregulamenta\xE7\xE3o da Alian\xE7a de Publicidade Digital para Publicidade Comportamental On-line (tamb\xE9m denominada \u201Cpublicidade com base em interesses\u201D) e respeita a ferramenta de escolha do consumidor da DAA (Digital Advertising Alliance [Alian\xE7a de Publicidade Digital]) para que voc\xEA opte por n\xE3o receber publicidade com base em interesses", " ", /*#__PURE__*/React.createElement(Components.Link, {
    to: "https://optout.aboutads.info"
  }, " ", "aqui"), ". Al\xE9m disso, nossas pol\xEDticas de an\xFAncios tamb\xE9m pro\xEDbem que anunciantes segmentem an\xFAncios com base em categorias que considerarmos sens\xEDveis ou proibidas pela legisla\xE7\xE3o, como ra\xE7a, religi\xE3o, pol\xEDtica, vida sexual ou sa\xFAde. Saiba mais sobre suas op\xE7\xF5es de privacidade para publicidade baseada em interesses aqui, e sobre como funcionam os an\xFAncios em nossos servi\xE7os aqui."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Se voc\xEA \xE9 um anunciante ou um anunciante potencial, processamos seus dados pessoais para ajudar a oferecer e fornecer nossos servi\xE7os de publicidade. Voc\xEA pode atualizar seus dados entrando em contato conosco diretamente, conforme descrito nesta Pol\xEDtica de Privacidade."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "2.7 Personaliza\xE7\xE3o com base em sua identidade inferida"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Quando voc\xEA se registra em nossos Servi\xE7os com um navegador ou dispositivo, n\xF3s associamos esse navegador ou dispositivo com a sua conta para finalidades como autentica\xE7\xE3o, seguran\xE7a e personaliza\xE7\xE3o. Sujeito \xE0s suas configura\xE7\xF5es, tamb\xE9m podemos associar a sua conta a navegadores ou dispositivos diferentes daqueles que voc\xEA usa para se registrar em nossos Servi\xE7os (ou associar seu dispositivo ou navegador desconectado a outros navegadores ou dispositivos). Quando voc\xEA fornece outras informa\xE7\xF5es a nossso Servi\xE7os, incluindo um endere\xE7o de e-mail, associamos essas informa\xE7\xF5es \xE0 sua conta . Sujeito \xE0s suas configura\xE7\xF5es, tamb\xE9m podemos usar essas informa\xE7\xF5es para inferir outras informa\xE7\xF5es sobre sua identidade, por exemplo, associando sua conta a hashes de endere\xE7os de e-mail que compartilham componentes comuns com o endere\xE7o de e-mail que voc\xEA forneceu a nossos Servi\xE7os. Fazemos isso para operar e personalizar nossos servi\xE7os. Por exemplo, se voc\xEA visitar sites com conte\xFAdo esportivo em seu laptop, poderemos mostrar-lhe an\xFAncios relacionados a esporte em nossos Servi\xE7os para Android e, se o endere\xE7o de e-mail associado \xE0 sua conta compartilhar componentes com outro endere\xE7o de e-mail, como nome, sobrenome ou iniciais compartilhados, poderemos posteriormente corresponder a an\xFAncios de anunciantes que estavam tentando acessar endere\xE7os de e-mail contendo esses componentes."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "2.10 Como Voc\xEA Controla as Informa\xE7\xF5es Adicionais que Recebemos"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Suas Configura\xE7\xF5es de personaliza\xE7\xE3o e dados nossos Servi\xE7os permitem que voc\xEA possa decidir:", /*#__PURE__*/React.createElement("br", null), "Se lhe mostraremos publicidade com base em interesses dentro e fora de nossos Servi\xE7os", /*#__PURE__*/React.createElement("br", null), "Como personalizamos com base em sua identidade inferida", /*#__PURE__*/React.createElement("br", null), "Se coletamos e usamos sua localiza\xE7\xE3o exata", /*#__PURE__*/React.createElement("br", null), "Se personalizamos sua experi\xEAncia com base em onde voc\xEA esteve", /*#__PURE__*/React.createElement("br", null), "Se acompanhamos os sites em que voc\xEA v\xEA o conte\xFAdo de nossos Servi\xE7os"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Voc\xEA pode usar Seus dados em nossos Servi\xE7os para analisar:", /*#__PURE__*/React.createElement("br", null), "Anunciantes que inclu\xEDram voc\xEA em p\xFAblicos-alvo personalizados para exibir an\xFAncios para voc\xEA", /*#__PURE__*/React.createElement("br", null), "Dados demogr\xE1ficos e dados de interesse sobre a sua conta de nossos parceiros de publicidade", /*#__PURE__*/React.createElement("br", null), "Informa\xE7\xF5es que nossos Servi\xE7os tem sobre voc\xEA, como sua faixa et\xE1ria, sexo, idiomas e interesses"), /*#__PURE__*/React.createElement(Typography.Title, null, "3. Informa\xE7\xF5es que Compartilhamos e Divulgamos"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Conforme observado acima, nossos Servi\xE7os foram desenhado para disseminar de maneira ampla e instant\xE2nea as informa\xE7\xF5es que voc\xEA compartilha publicamente por meio destes servi\xE7os. Nas circunst\xE2ncias limitadas em que divulgamos seus dados pessoais privados, n\xF3s o faremos sujeito ao seu controle, porque \xE9 importante para operar nossos servi\xE7os, ou porque \xE9 requerido pela legisla\xE7\xE3o."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "3.1 Compartilhando Seu Controle"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "N\xF3s compartilhamos ou divulgamos seus dados pessoais com o seu consentimento ou de acordo com as suas orienta\xE7\xF5es, por exemplo, quando voc\xEA autoriza que um cliente Web ou aplicativo de terceiros acesse a sua conta, ou quando voc\xEA nos orienta a compartilhar seu feedback com uma empresa. Se voc\xEA compartilhou informa\xE7\xF5es como Mensagens Diretas Conte\xFAdos protegidos com outra pessoa que acessar nossos Servi\xE7os utilizando um servi\xE7o de terceiros, lembre-se de que as informa\xE7\xF5es poder\xE3o ser compartilhadas com o servi\xE7o de terceiros."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Sujeito \xE0s suas configura\xE7\xF5es, tamb\xE9m fornecemos a terceiros determinados dados pessoais para nos ajudar a oferecer ou operar nossos servi\xE7os. Voc\xEA pode saber mais sobre essas parcerias em nossa Central de Ajuda e controlar se nossos Servi\xE7os compartilham seus dados pessoais dessa maneira usando a op\xE7\xE3o \u201CPermitir compartilhamento de informa\xE7\xF5es adicionais com parceiros de neg\xF3cios\u201D em suas configura\xE7\xF5es de Personaliza\xE7\xE3o e Dados. (Esta configura\xE7\xE3o n\xE3o controla o compartilhamento descrito em outras partes de nossa Pol\xEDtica de Privacidade, como quando compartilhamos dados com nossos prestadores de servi\xE7os, ou atrav\xE9s de parcerias diferentes das descritas na nossa Central de Ajuda.)"), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "3.2 Prestadores de Servi\xE7os"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "N\xF3s engajamos com prestadores de servi\xE7os para desempenhar fun\xE7\xF5es e prestar servi\xE7os para n\xF3s no Brasil e em outros pa\xEDses. Por exemplo, n\xF3s usamos uma variedade de servi\xE7os de terceiros para nos ajudar a operar nossos servi\xE7os, como hospedagem de nossos diversos blogs e wikis, assim como para nos ajudar a compreender melhor a utiliza\xE7\xE3o dos nossos Servi\xE7os, como o Google Analytics. N\xF3s podemos compartilhar seus dados pessoais privados com esses prestadores de servi\xE7os, sujeito a obriga\xE7\xF5es consistentes com esta Pol\xEDtica de Privacidade e quaisquer outras medidas de confidencialidade e seguran\xE7a adequadas, e sob a condi\xE7\xE3o de que os terceiros utilizem seus dados pessoais privados somente em nosso nome e de acordo com as nossas instru\xE7\xF5es (os prestadores de servi\xE7os podem usar outros dados n\xE3o pessoais para seu pr\xF3prio benef\xEDcio). N\xF3s compartilhamos suas informa\xE7\xF5es de pagamento com os prestadores de servi\xE7os de pagamento para processar pagamentos, prevenir, detectar e investigar fraudes ou outras atividades proibidas, facilitar a resolu\xE7\xE3o de disputas como estornos ou reembolsos, e para outros objetivos associados \xE0 aceita\xE7\xE3o de cart\xF5es de cr\xE9dito e d\xE9bito."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "3.3 Legisla\xE7\xE3o, Dano e Interesse P\xFAblico"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "N\xE3o obstante qualquer disposi\xE7\xE3o em contr\xE1rio nesta Pol\xEDtica de Privacidade ou nos controles que possamos oferecer a voc\xEA, poderemos preservar, usar, compartilhar ou divulgar seus dados pessoais ou outros dados de seguran\xE7a se acreditarmos que \xE9 razoavelmente necess\xE1rio para o cumprimento de uma lei, regulamenta\xE7\xE3o, processo legal ou solicita\xE7\xE3o governamental; para proteger a seguran\xE7a de qualquer pessoa; para proteger a seguran\xE7a ou integridade de nossa plataforma, inclusive para ajudar a prevenir spam, abuso ou agentes nocivos em nossos servi\xE7os, ou para explicar por que removemos conte\xFAdo ou contas de nossos servi\xE7os8; para endere\xE7ar quest\xF5es de fraude, seguran\xE7a ou t\xE9cnicas; ou para proteger nossos direitos ou propriedade ou os direitos ou propriedade daqueles que usam nossos servi\xE7os. No entanto, nada nesta Pol\xEDtica de Privacidade tem por objetivo limitar quaisquer direitos de defesa ou oposi\xE7\xE3o que voc\xEA possa ter em rela\xE7\xE3o a solicita\xE7\xF5es de terceiros para a divulga\xE7\xE3o de seus dados pessoais, inclusive solicita\xE7\xF5es feitas por um governo."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "3.4 Afiliadas e Transfer\xEAncia de Propriedade"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Se estivermos envolvidos em um processo de fal\xEAncia, fus\xE3o, aquisi\xE7\xE3o, reorganiza\xE7\xE3o ou de venda de ativos, seus dados pessoais poder\xE3o ser vendidos ou transferidos como parte dessa transa\xE7\xE3o. Esta Pol\xEDtica de Privacidade ser\xE1 aplic\xE1vel aos seus dados pessoais conforme sejam transferidas \xE0 nova entidade. Tamb\xE9m podemos divulgar dados pessoais sobre voc\xEA \xE0s nossas empresas afiliadas para ajudar a operar nossos servi\xE7os e os servi\xE7os de nossas afiliadas, inclusive a veicula\xE7\xE3o de an\xFAncios."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "3.5 Informa\xE7\xF5es N\xE3o Pessoais"), /*#__PURE__*/React.createElement(Typography.Paragraph, null), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "N\xF3s compartilhamos ou divulgamos dados n\xE3o pessoais, por exemplo, inagregadas como o n\xFAmero total de vezes em que as pessoas se envolveram com um Conte\xFAdo, demografia, o n\xFAmero de usu\xE1rios que clicaram em um link espec\xEDfico ou votaram em uma enquete em um Conte\xFAdo (mesmo que apenas uma pessoa o tenha feito), os t\xF3picos sobre os quais as pessoas est\xE3o interagindo em um local espec\xEDfico, alguns interesses inferidos ou relat\xF3rios aos anunciantes sobre quantas pessoas viram ou clicaram em seus an\xFAncios."), /*#__PURE__*/React.createElement(Typography.Paragraph, null), /*#__PURE__*/React.createElement(Typography.Title, null, "4. Gerenciando Suas Informa\xE7\xF5es Pessoais Conosco"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Voc\xEA controla os dados pessoais que voc\xEA compartilha conosco. Voc\xEA pode acessar ou corrigir esses dados a qualquer momento. Voc\xEA tamb\xE9m pode desativar sua conta. Tamb\xE9m fornecemos ferramentas para voc\xEA fazer obje\xE7\xE3o, restringir ou retirar o consentimento, quando aplic\xE1vel, para o uso dos dados que voc\xEA forneceu a nossos Servi\xE7os. E fazemos com que os dados que voc\xEA compartilhou por meio de nossos servi\xE7os sejam port\xE1teis e fornecemos maneiras f\xE1ceis de entrar em contato conosco. Observe que, para ajudar a proteger sua privacidade e manter a seguran\xE7a, tomamos medidas para verificar sua identidade antes de conceder acesso a suas informa\xE7\xF5es pessoais ou cumprir exclus\xE3o, portabilidade ou outras solicita\xE7\xF5es relacionadas."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "4.1 Acessando ou Retificando Seus Dados Pessoais"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Se voc\xEA registrou uma conta em nossos Servi\xE7os, n\xF3s disponibilizamos a voc\xEA ferramentas e configura\xE7\xF5es de conta para acessar, corrigir, excluir ou modificar os dados pessoais que voc\xEA nos forneceu e que estejam associados \xE0 sua conta. Voc\xEA pode baixar determinadas informa\xE7\xF5es da conta, inclusive seus Conte\xFAdos."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "4.2 Exclus\xE3o"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Mantemos os Dados de Registro por 18 meses no m\xE1ximo. Quando desativada, sua conta em nossos Servi\xE7os, incluindo seu nome de exibi\xE7\xE3o, nome de usu\xE1rio e perfil p\xFAblico, n\xE3o ser\xE3o mais vis\xEDveis em nossos Servi\xE7os, para iOS e para Android. Por at\xE9 30 dias ap\xF3s a desativa\xE7\xE3o, ainda ser\xE1 poss\xEDvel restaurar a sua conta em nossos Servi\xE7os, caso ela tenha sido desativada acidentalmente ou indevidamente."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Lembre-se de que os mecanismos de busca e outros terceiros ainda podem manter c\xF3pias de suas informa\xE7\xF5es p\xFAblicas, como as informa\xE7\xF5es do seu perfil de usu\xE1rio e Conte\xFAdos p\xFAblicos, mesmo ap\xF3s a exclus\xE3o das informa\xE7\xF5es dos nossos servi\xE7os ou a desativa\xE7\xE3o de sua conta"), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "4.3 Obje\xE7\xE3o, Restri\xE7\xE3o ou Retirada de Consentimento"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Quando voc\xEA est\xE1 conectado em sua conta em nossos Servi\xE7os, voc\xEA pode gerenciar suas configura\xE7\xF5es de privacidade e outros recursos da conta aqui a qualquer momento. Pode demorar um pouco para que as configura\xE7\xF5es de privacidade sejam totalmente refletidas em nossos sistemas."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "4.4 Portabilidade"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Nossa Empresa fornece a voc\xEA um meio de fazer o download das informa\xE7\xF5es que voc\xEA compartilhou por meio de nossos servi\xE7os."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "4.5 Informa\xE7\xF5es ou Assist\xEAncia Adicionais"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Sugest\xF5es ou perguntas sobre esta Pol\xEDtica de Privacidade? Avise-nos entrando em contato conosco ou envie-nos uma mensagem utilizando o endere\xE7o adequado abaixo."), /*#__PURE__*/React.createElement(Typography.Title, null, "Crian\xE7as e Nossos Servi\xE7os"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Nossos servi\xE7os n\xE3o s\xE3o direcionados a crian\xE7as, e voc\xEA n\xE3o pode usar nossos servi\xE7os se tiver menos de 13 anos de idade. Voc\xEA tamb\xE9m precisa ter idade suficiente para consentir com o processamento de seus dados pessoais em seu pa\xEDs (em alguns pa\xEDses, podemos permitir que seus pais ou respons\xE1veis o fa\xE7am em seu nome). Voc\xEA precisa ter pelo menos 16 anos de idade para usar o Periscope."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "Nossas Opera\xE7\xF5es Globais e o Privacy Shield"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Para oferecer os nossos servi\xE7os a voc\xEA, operamos globalmente. Nos casos em que as leis do seu pa\xEDs permitirem, voc\xEA nos autoriza a transferir, armazenar e usar seus dados nos Estados Unidos, na Irlanda e em qualquer outro pa\xEDs onde operamos. Em alguns desses pa\xEDses aos quais nossa Empresa transfere dados pessoais, a privacidade e as leis e regulamentos de prote\xE7\xE3o de dados com rela\xE7\xE3o a quando as autoridades governamentais podem acessar dados podem variar em rela\xE7\xE3o \xE0quelas no pa\xEDs em que voc\xEA vive. Saiba mais sobre nossas opera\xE7\xF5es globais e transfer\xEAncia de dados aqui."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Quando transferimos dados pessoais para fora da Uni\xE3o Europeia, dos pa\xEDses da Associa\xE7\xE3o de Livre Com\xE9rcio Europeia ou do Reino Unido, garantimos um n\xEDvel adequado de prote\xE7\xE3o dos direitos dos titulares dos dados com base na adequa\xE7\xE3o das leis de prote\xE7\xE3o de dados do pa\xEDs receptor, obriga\xE7\xF5es contratuais impostas ao receptor dos dados (as cl\xE1usulas modelo podem ser solicitadas por consulta, conforme descrito abaixo), ou princ\xEDpios de escudo de privacidade UE-EUA e Su\xED\xE7a-EUA."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Quando transferimos dados pessoais para fora da Uni\xE3o Europeia, dos pa\xEDses da Associa\xE7\xE3o de Livre Com\xE9rcio Europeia ou do Reino Unido, garantimos um n\xEDvel adequado de prote\xE7\xE3o dos direitos dos titulares dos dados com base na adequa\xE7\xE3o das leis de prote\xE7\xE3o de dados do pa\xEDs receptor, obriga\xE7\xF5es contratuais impostas ao receptor dos dados (as cl\xE1usulas modelo podem ser solicitadas por consulta, conforme descrito abaixo), ou princ\xEDpios de escudo de privacidade UE-EUA e Su\xED\xE7a-EUA."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Nossa Empresa est\xE1 em conformidade com os princ\xEDpios do Privacy Shield entre UE-EUA e Su\xED\xE7a-EUA (os \u201CPrinc\xEDpios\u201D) com rela\xE7\xE3o \xE0 coleta, ao uso, ao compartilhamento e \xE0 reten\xE7\xE3o de dados pessoais da Uni\xE3o Europeia, dos pa\xEDses da Associa\xE7\xE3o Europeia de Livre Com\xE9rcio e do Reino Unido, conforme descrito em nossa certifica\xE7\xE3o do UE-EUA Privacy Shield e certifica\xE7\xE3o do Su\xED\xE7a-EUA Privacy Shield.")))];
};

const Terms = props => {
  return [/*#__PURE__*/React.createElement(Row, {
    justify: "center"
  }, /*#__PURE__*/React.createElement(Typography.Title, null, /*#__PURE__*/React.createElement(SafetyOutlined, {
    style: {
      fontSize: "55px"
    }
  }), "  ", "Termos de Servi\xE7o")), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    xs: 24,
    md: 24
  }, /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Estes Termos de Servi\xE7o (\u201CTermos\u201D) regem seu acesso e uso de nossos servi\xE7os, incluindo nossos v\xE1rios sites, SMS, APIs, notifica\xE7\xF5es por e-mail, aplicativos, bot\xF5es, widgets, an\xFAncios, servi\xE7os comerciais, e nossos outros servi\xE7os cobertos que est\xE3o vinculados a estes Termos (coletivamente, os \u201CServi\xE7os\u201D), e quaisquer informa\xE7\xF5es, textos, links, gr\xE1ficos, fotos, \xE1udios, v\xEDdeos ou outros materiais ou disposi\xE7\xE3o de materiais enviados, baixados ou exibidos nos Servi\xE7os (coletivamente denominados como \u201CConte\xFAdo\u201D). Ao utilizar os Servi\xE7os, voc\xEA concorda em estar sujeito a estes Termos."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "1. Quem pode utilizar os Servi\xE7os"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Voc\xEA pode utilizar os Servi\xE7os somente se concordar em celebrar um contrato vinculante conosco e n\xE3o for uma pessoa impedida de receber servi\xE7os sob as leis da jurisdi\xE7\xE3o aplic\xE1vel. Em qualquer hip\xF3tese, voc\xEA deve ter no m\xEDnimo 13 anos de idade, para utilizar os Servi\xE7os. Se estiver aceitando estes Termos e utilizando os Servi\xE7os em nome de uma empresa, organiza\xE7\xE3o, governo ou outra entidade legal, voc\xEA declara e garante que est\xE1 autorizado a realizar tal a\xE7\xE3o e que tem poderes para vincular referida entidade a estes Termos, hip\xF3tese em que as palavras \"voc\xEA\" e \"seu\" conforme utilizadas nestes Termos far\xE3o refer\xEAncia a tal entidade."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "2. Privacidade"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Nossa", " ", /*#__PURE__*/React.createElement(Components.Link, {
    to: "/privacy"
  }, "Pol\xEDtica de Privacidade"), " ", "descreve como manuseamos as informa\xE7\xF5es fornecidas ao utilizar nossos Servi\xE7os. Voc\xEA entende que, ao utilizar os Servi\xE7os, concorda com a coleta e uso (conforme estabelecido na Pol\xEDtica de Privacidade) dessas informa\xE7\xF5es, incluindo a transfer\xEAncia dessas informa\xE7\xF5es para os Estados Unidos, Irlanda e/ou outros pa\xEDses para fins de armazenamento, processamento e uso por nossa Emprasa e suas afiliadas."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "3. Conte\xFAdo nos Servi\xE7os"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Voc\xEA \xE9 respons\xE1vel por seu uso dos Servi\xE7os e por qualquer Conte\xFAdo fornecido, incluindo a conformidade com leis, regras e regulamentos aplic\xE1veis. Voc\xEA s\xF3 deve fornecer Conte\xFAdo com o qual esteja confort\xE1vel em compartilhar com outras pessoas."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Qualquer uso ou confian\xE7a em qualquer Conte\xFAdo ou materiais publicados pelos Servi\xE7os ou obtidos por voc\xEA pelos Servi\xE7os \xE9 de sua inteira responsabilidade. N\xE3o aprovamos, apoiamos, declaramos nem garantimos a integridade, veracidade, exatid\xE3o ou confiabilidade de qualquer Conte\xFAdo ou comunicado publicado pelos Servi\xE7os, tampouco endossamos opini\xF5es expressas por eles. Voc\xEA compreende que, ao utilizar os Servi\xE7os, pode estar exposto a Conte\xFAdo ofensivo, prejudicial, impreciso, inadequado ou, em alguns casos, a publica\xE7\xF5es identificadas de modo indevido ou fraudulentas. Todo o Conte\xFAdo \xE9 de responsabilidade exclusiva da pessoa que o criar. N\xE3o podemos monitorar ou controlar o Conte\xFAdo postado pelos Servi\xE7os, e n\xE3o podemos nos responsabilizar por tal Conte\xFAdo."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Reservamo-nos ao direito de remover o Conte\xFAdo que viole o Acordo do Usu\xE1rio, incluindo, por exemplo, viola\xE7\xF5es de direitos autorais ou de marcas comerciais ou outra apropria\xE7\xE3o ind\xE9bita de propriedade intelectual, falsidade ideol\xF3gica, conduta ilegal ou ass\xE9dio. Constam informa\xE7\xF5es relacionadas \xE0s pol\xEDticas espec\xEDficas e ao processo para denunciar ou reclamar quanto a viola\xE7\xE3o em nossa central de ajuda."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 4
  }, "Seus Direitos e a Concess\xE3o de Direitos sobre o Conte\xFAdo"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Voc\xEA manter\xE1 seus direitos sobre qualquer Conte\xFAdo que enviar, publicar ou exibir nos Servi\xE7os ou por meio deles. O que for seu ser\xE1 seu; voc\xEA \xE9 o propriet\xE1rio do seu Conte\xFAdo (e seus \xE1udios, fotos e v\xEDdeos incorporados s\xE3o considerados parte do Conte\xFAdo)."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Ao enviar, publicar ou exibir Conte\xFAdo nos Servi\xE7os ou por meio deles, voc\xEA nos outorga uma licen\xE7a mundial gratuita, n\xE3o exclusiva (com direito a sublicenciar) para utilizar, copiar, reproduzir, processar, adaptar, modificar, publicar, transmitir, exibir e distribuir esse Conte\xFAdo em qualquer e todos os tipos de m\xEDdia ou m\xE9todos de distribui\xE7\xE3o j\xE1 dispon\xEDveis ou que venham a ser desenvolvidos (para maior clareza, esses direitos incluem, por exemplo, curadoria, transforma\xE7\xE3o, e tradu\xE7\xE3o). Esta licen\xE7a nos autoriza a tornar seu Conte\xFAdo dispon\xEDvel para o restante do mundo e permite que outros usu\xE1rios fa\xE7am o mesmo. Voc\xEA concorda que esta licen\xE7a outorga a nossa Empresa o direito de fornecer, promover e melhorar os Servi\xE7os, al\xE9m de tornar o Conte\xFAdo enviado para ou por meio dos Servi\xE7os dispon\xEDvel a outras empresas, organiza\xE7\xF5es ou pessoas que s\xE3o parceiras de nossa Empresa para fins de distribui\xE7\xE3o, Retweet, transmiss\xE3o, divulga\xE7\xE3o ou publica\xE7\xE3o dele em outros tipos de m\xEDdia e servi\xE7os, sujeitando-se aos nossos termos e condi\xE7\xF5es de utiliza\xE7\xE3o de Conte\xFAdo. Tais usos adicionais por parte de nossa Empresa ou de outras empresas, organiza\xE7\xF5es ou indiv\xEDduos parceiros de nossa Empresa ocorre sem que lhe seja devida qualquer remunera\xE7\xE3o pelo Conte\xFAdo que voc\xEA enviar, publicar, transmitir ou, de outra maneira, disponibilizar por meio dos Servi\xE7os uma vez que o uso dos Servi\xE7os por voc\xEA \xE9 acordado como compensa\xE7\xE3o suficiente pelo Conte\xFAdo e pela concess\xE3o de direitos aqui contidos."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Nossa Empresa tem um conjunto de regras em constante evolu\xE7\xE3o relacionadas \xE0 forma como os parceiros do ecossistema podem interagir com o seu Conte\xFAdo nos Servi\xE7os de nossa Empresa. Tais regras existem para possibilitar a exist\xEAncia de um ecossistema aberto, levando em considera\xE7\xE3o os seus direitos. Voc\xEA entende que podemos modificar ou adaptar seu Conte\xFAdo, uma vez que ele tenha sido distribu\xEDdo, publicado ou transmitido por nossa Empresa ou nossos parceiros e/ou fazer altera\xE7\xF5es em seu Conte\xFAdo para adapt\xE1-lo a diferentes tipos de m\xEDdia."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Voc\xEA declara e garante que possui ou que obteve todos os direitos, licen\xE7as, consentimentos, permiss\xF5es, poderes e/ou autoriza\xE7\xF5es necess\xE1rios para outorgar os direitos aqui citados para qualquer Conte\xFAdo enviado, postado ou exibido por voc\xEA nos Servi\xE7os ou por meio deles. Voc\xEA concorda que o Conte\xFAdo n\xE3o conter\xE1 materiais protegidos por direitos autorais ou outros direitos exclusivos a menos que voc\xEA tenha a permiss\xE3o necess\xE1ria ou seja de outra forma legalmente autorizado a postar o material e a conceder a nossa Empresa a licen\xE7a descrita acima."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "4. Utiliza\xE7\xE3o dos Servi\xE7os"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Revise as Regras de nossa Empresa e pol\xEDticas, que fazem parte do Acordo do Usu\xE1rio e descrevem o que \xE9 proibido nos Servi\xE7os. Voc\xEA pode utilizar os Servi\xE7os somente em conformidade com estes Termos e todas as leis, regras e regulamentos aplic\xE1veis."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Nossos Servi\xE7os evoluem constantemente. Sendo assim, os Servi\xE7os podem ser alterados de tempos em tempos, a nosso exclusivo crit\xE9rio. Podemos interromper (permanente ou temporariamente) o fornecimento dos Servi\xE7os ou quaisquer recursos nos Servi\xE7os para voc\xEA ou usu\xE1rios em geral. Tamb\xE9m podemos manter o direito de criar limites de uso e armazenamento, a nosso exclusivo crit\xE9rio e a qualquer momento. N\xF3s tamb\xE9m podemos remover ou recusar a distribui\xE7\xE3o de qualquer Conte\xFAdo nos Servi\xE7os, limitar a distribui\xE7\xE3o ou visibilidade de qualquer Conte\xFAdo no servi\xE7o, suspender ou encerrar contas de usu\xE1rios e recuperar nomes de usu\xE1rios sem responsabilidade perante voc\xEA."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Em considera\xE7\xE3o a nossa Empresa por conceder a voc\xEA acesso e uso dos Servi\xE7os, voc\xEA concorda que nossa Empresa e seus provedores de terceiros e parceiros podem colocar an\xFAncios nos Servi\xE7os ou em conex\xE3o com a exibi\xE7\xE3o do Conte\xFAdo ou de informa\xE7\xF5es dos Servi\xE7os, enviados por voc\xEA ou por outras pessoas. Voc\xEA tamb\xE9m concorda em n\xE3o fazer uso indevido de nossos Servi\xE7os, por exemplo, interferindo ou acessando-os por meio de um m\xE9todo que n\xE3o seja a interface e as instru\xE7\xF5es fornecidas por nossa Empresa. Voc\xEA n\xE3o pode realizar nenhuma das seguintes a\xE7\xF5es ao acessar ou utilizar os Servi\xE7os: (i) acessar, adulterar ou utilizar \xE1reas n\xE3o p\xFAblicas dos Servi\xE7os, os sistemas de computadores de nossa Empresa ou os sistemas de entrega t\xE9cnica dos fornecedores de nossa Empresa; (ii) sondar, examinar ou testar as vulnerabilidades de qualquer sistema ou rede, ou violar ou neutralizar qualquer medida de seguran\xE7a ou autentica\xE7\xE3o; (iii) acessar ou pesquisar, ou tentar acessar ou pesquisar os Servi\xE7os por quaisquer meios (automatizados ou de qualquer outra maneira) de outra forma que n\xE3o por meio das interfaces publicadas e atualizadas disponibilizadas por nossa Empresa (e sujeito aos respectivos termos e condi\xE7\xF5es), exceto quando voc\xEA tenha sido especificamente autorizado a realizar esses atos por meio de um acordo separado com o nossa Empresa (OBS.: o crawling ou recurso a indexadores autom\xE1ticos nos Servi\xE7os \xE9 admiss\xEDvel desde que efetuado de acordo com os termos e condi\xE7\xF5es constantes do arquivo robots.txt; n\xE3o obstante, \xE9 expressamente proibido o scraping dos Servi\xE7os sem o consentimento pr\xE9vio de nossa Empresa); (iv) forjar o cabe\xE7alho de qualquer pacote TCP/IP ou qualquer parte da informa\xE7\xE3o constante do cabe\xE7alho de qualquer e-mail ou publica\xE7\xE3o, assim como utilizar os Servi\xE7os de qualquer forma para enviar informa\xE7\xE3o identificadora de origem alterada, enganosa ou falsa; ou (v) interferir ou prejudicar, (ou tentar assim o fazer), o acesso de qualquer usu\xE1rio, prestador de servi\xE7os de hosting (armazenagem principal ou em servidor) ou de rede, incluindo, sem limita\xE7\xE3o, por meio de atos como o envio de v\xEDrus, overloading (sobrecarga), flooding, envio de spam (comunica\xE7\xF5es n\xE3o solicitadas) e-mail-bombing direcionados aos Servi\xE7os, ou por meio do uso de scripts para a cria\xE7\xE3o de Conte\xFAdo de maneira que interfira com os Servi\xE7os ou crie uma carga excessiva neles. Tamb\xE9m nos reservamos o direito de acessar, ler, preservar e divulgar quaisquer informa\xE7\xF5es que acreditarmos ser razoavelmente necess\xE1rias para (i) satisfazer solicita\xE7\xE3o governamental de qualquer lei, regulamento ou processo jur\xEDdico aplic\xE1vel, (ii) cumprir os Termos, incluindo a investiga\xE7\xE3o de poss\xEDveis viola\xE7\xF5es deste Acordo, (iii) detectar, prevenir ou, de outra forma lidar com fraude, seguran\xE7a ou problemas t\xE9cnicos, (iv) responder solicita\xE7\xF5es de suporte do usu\xE1rio, ou (v) proteger os direitos, propriedade ou seguran\xE7a de nossa Empresa, de seus usu\xE1rios e do p\xFAblico. Nossa Empresa n\xE3o divulga informa\xE7\xF5es pessoais a terceiros, exceto de acordo com nossa Pol\xEDtica de Privacidade."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 4
  }, "Sua conta"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Voc\xEA pode precisar criar uma conta para utilizar alguns de nossos Servi\xE7os. Voc\xEA \xE9 respons\xE1vel por proteger sua conta, portanto, use uma senha forte e limite seu uso para esta conta. N\xF3s n\xE3o podemos ser e n\xE3o seremos respons\xE1veis por qualquer perda ou dano resultante do seu n\xE3o cumprimento com o descrito acima."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Voc\xEA pode controlar a maioria das comunica\xE7\xF5es a partir dos Servi\xE7os. Talvez nossa Empresa precise enviar a voc\xEA certas comunica\xE7\xF5es, como an\xFAncios de servi\xE7os e mensagens administrativas. Essas comunica\xE7\xF5es s\xE3o consideradas parte dos Servi\xE7os e da sua conta, e voc\xEA n\xE3o conseguir\xE1 cancelar o recebimento delas. Se voc\xEA adicionou seu n\xFAmero de telefone em sua conta e posteriormente mudar ou desativar esse n\xFAmero de telefone, ser\xE1 necess\xE1rio atualizar suas informa\xE7\xF5es da conta para ajudar a evitar que nossa Empresa entre em contato com qualquer pessoa que compre seu n\xFAmero antigo."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 4
  }, "Sua licen\xE7a para utilizar os Servi\xE7os"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Nossa Empresa oferece a voc\xEA uma licen\xE7a pessoal, mundial, n\xE3o atribu\xEDvel e n\xE3o exclusiva, para utilizar o software fornecido a voc\xEA como parte dos Servi\xE7os. Essa licen\xE7a possui a finalidade exclusiva de permitir que voc\xEA utilize e aproveite o benef\xEDcio dos Servi\xE7os, conforme descrito por nossa Empresa, na maneira permitida por estes Termos."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Os Servi\xE7os s\xE3o protegidos por direitos autorais, marcas registradas e outras leis do Brasil e de outros pa\xEDses. Nada nos Termos outorga a voc\xEA o direito de utilizar o nome de nossa Empresa ou quaisquer marcas registradas, logotipos, nomes de dom\xEDnio, outras caracter\xEDsticas distintivas de sua marca, e outros direitos de propriedade. Todos os direitos, t\xEDtulos e interesses sobre e relacionados aos Servi\xE7os (exceto aqueles relacionados ao Conte\xFAdo fornecido pelos usu\xE1rios) s\xE3o e continuar\xE3o sendo propriedade exclusiva de nossa Empresa e de seus licenciadores. Quaisquer feedback, coment\xE1rios ou sugest\xF5es fornecidos com rela\xE7\xE3o a nossa Empresa ou os Servi\xE7os s\xE3o totalmente volunt\xE1rios e poder\xE3o ser utilizados como feedback, coment\xE1rios ou sugest\xF5es de acordo com nossa conveni\xEAncia e sem que haja qualquer obriga\xE7\xE3o perante voc\xEA."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 4
  }, "Cessa\xE7\xE3o destes Termos"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Voc\xEA poder\xE1 cessar seu acordo legal com nossa Empresa a qualquer momento desativando suas contas e descontinuando o uso dos Servi\xE7os. Consulte a", " ", /*#__PURE__*/React.createElement(Components.Link, {
    to: "/privacy"
  }, "Pol\xEDtica de Privacidade"), " ", "para mais informa\xE7\xF5es sobre o que acontece com suas informa\xE7\xF5es."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Poderemos suspender ou encerrar sua conta ou parar de fornecer a voc\xEA toda ou qualquer parte dos Servi\xE7os a qualquer momento e por qualquer motivo, inclusive \u2013 sem limita\xE7\xE3o \u2013 se tivermos motivo para acreditar que: (i) voc\xEA violou estes Termos, as Regras e Pol\xEDticas de nossa Empresa ou as Diretrizes de Comunidade do Periscope; (ii) voc\xEA representa um risco ou poss\xEDvel risco jur\xEDdico para n\xF3s; (iii) sua conta deva ser removida devido a conduta ilegal; (iv) sua conta deva ser removida devido a inatividade prolongada; ou (v) o fornecimento dos nossos Servi\xE7os a voc\xEA n\xE3o \xE9 mais vi\xE1vel comercialmente. N\xF3s realizaremos esfor\xE7os razo\xE1veis para notific\xE1-lo por e-mail pelo endere\xE7o associado \xE0 sua conta ou na pr\xF3xima ocasi\xE3o em que voc\xEA tentar acessar sua conta, dependendo das circunst\xE2ncias. Em todas as hip\xF3teses acima, terminar\xE1 a vig\xEAncia dos Termos, inclusive, sem limita\xE7\xE3o, sua licen\xE7a de uso dos Servi\xE7os, com exce\xE7\xE3o das seguintes cl\xE1usulas, que permanecer\xE3o em vigor: II, III, V, e VI. Se voc\xEA achar que sua conta foi exclu\xEDda por engano, voc\xEA poder\xE1 fazer uma reclama\xE7\xE3o seguindo os passos descritos na central de ajuda. Para evitar d\xFAvidas, estes Termos sobrevivem \xE0 desativa\xE7\xE3o ou encerramento da sua conta."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "5. Isen\xE7\xF5es e Limita\xE7\xF5es de Responsabilidade"), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "Os Servi\xE7os est\xE3o dispon\xEDveis \"COMO EST\xC3O\""), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Se voc\xEA mora fora da Uni\xE3o Europeia, dos Pa\xEDses da Associa\xE7\xE3o Europeia de Livre Com\xE9rcio ou Reino Unido, inclusive se voc\xEA mora no Brasil, voc\xEA concorda que o seu acesso e uso dos Servi\xE7os ou de qualquer Conte\xFAdo \xE9 por sua conta e risco. Voc\xEA entende e concorda que os Servi\xE7os s\xE3o fornecidos a voc\xEA \"COMO EST\xC3O\" e \"COMO DISPON\xCDVEIS\". As \"Entidades de nossa Empresa\" se referem a nossa Empresa, suas matrizes, afiliadas, empresas relacionadas, executivos, diretores, funcion\xE1rios, agentes, representantes, parceiros e licenciadores. Sem limitar o acima exposto, na extens\xE3o m\xE1xima permitida pela lei aplic\xE1vel, AS ENTIDADES DE NOSSA EMPRESA REJEITAM TODAS AS GARANTIAS E CONDI\xC7\xD5ES, EXPRESSAS OU IMPL\xCDCITAS, DE COMERCIABILIDADE, ADEQUA\xC7\xC3O A UMA FINALIDADE ESPEC\xCDFICA OU N\xC3O VIOLA\xC7\xC3O. As Entidades de nossa Empresa n\xE3o d\xE3o garantia ou representa\xE7\xE3o e se eximem de toda e qualquer responsabilidade por: (i) integridade, precis\xE3o, disponibilidade, pontualidade, seguran\xE7a ou confiabilidade dos Servi\xE7os ou de qualquer Conte\xFAdo; (ii) qualquer dano ao sistema do seu computador, perda de dados ou outro dano resultante do seu acesso ou uso dos Servi\xE7os ou de qualquer Conte\xFAdo; (iii) a exclus\xE3o ou a falha em armazenar ou transmitir qualquer Conte\xFAdo e outras comunica\xE7\xF5es mantidas pelos Servi\xE7os; e (iv) se os Servi\xE7os atender\xE3o aos seus requisitos ou estar\xE3o dispon\xEDveis de forma ininterrupta, segura ou sem erros. Nenhum conselho ou informa\xE7\xE3o, oral ou escrita, obtida das Entidades do nossa Empresa ou atrav\xE9s dos Servi\xE7os, criar\xE1 qualquer garantia ou representa\xE7\xE3o n\xE3o expressamente feita aqui."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "Limita\xE7\xE3o de Responsabilidade"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Se voc\xEA mora fora da Uni\xE3o Europeia, dos Pa\xEDses da Associa\xE7\xE3o Europeia de Livre Com\xE9rcio ou Reino Unido, inclusive se voc\xEA mora no Brasil, VOC\xCA CONCORDA QUE AT\xC9 O M\xC1XIMO PERMITIDO PELA LEI APLIC\xC1VEL, AS ENTIDADES DE NOSSA EMPRESA N\xC3O SER\xC3O RESPONS\xC1VEIS POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS, OU QUALQUER PERDA DE LUCROS OU RECEITAS, SEJA OCORRIDA DIRETAMENTE OU INDIRETAMENTE, OU QUALQUER PERDA DE DADOS, USO, BENEVOL\xCANCIA OU OUTRAS PERDAS INTANG\xCDVEIS, RESULTANTES DE (i) SEU ACESSO AO OU USO DOS OU INABILIDADE DE ACESSAR OU USAR OS SERVI\xC7OS; (ii) QUALQUER CONDUTA OU CONTE\xDADO DE TERCEIROS NOS SERVI\xC7OS, INCLUINDO SEM LIMITA\xC7\xC3O, QUALQUER CONDUTA DIFAMAT\xD3RIA, OFENSIVA OU ILEGAL DE OUTROS USU\xC1RIOS OU TERCEIROS; (iii) QUALQUER CONTE\xDADO OBTIDO PELOS SERVI\xC7OS; OU (iv) ACESSO, USO OU ALTERA\xC7\xC3O N\xC3O AUTORIZADOS DE SUAS TRANSMISS\xD5ES OU CONTE\xDADO. EM NENHUM CASO A RESPONSABILIDADE AGREGADA DAS ENTIDADES DE NOSSA EMPRESA EXCEDER\xC1 O VALOR DE UM CENTAVO DE REAIS ( R$ 0,01) OU O VALOR PAGO A NOSSA EMPRESA, SE FOR O CASO, NOS \xDALTIMOS SEIS MESES PELOS SERVI\xC7OS DANDO ORIGEM \xC0 REIVINDICA\xC7\xC3O. AS LIMITA\xC7\xD5ES DESTA SUBSE\xC7\xC3O SE APLICAR\xC3O A QUALQUER HIP\xD3TESE DE RESPONSABILIDADE, SEJA BASEADA EM GARANTIA, CONTRATO, ESTATUTO, DANO (INCLUINDO NEGLIG\xCANCIA) OU DE OUTRO MODO, E INDEPENDENTEMENTE DE AS ENTIDADES DE NOSSA EMPRESA TEREM SIDO INFORMADAS DA POSSIBILIDADE DE QUALQUER DANO, E MESMO SE UM RECURSO ESTABELECIDO NESTE TERMO TENHA FALHADO EM SEU OBJETIVO ESSENCIAL."), /*#__PURE__*/React.createElement(Typography.Title, {
    level: 3
  }, "6. Geral"), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Poderemos revisar estes Termos de tempos em tempos. As modifica\xE7\xF5es n\xE3o ser\xE3o retroativas, e a vers\xE3o mais atualizada dos Termos, que estar\xE1 sempre disponivel, reger\xE1 nossa rela\xE7\xE3o com voc\xEA. Exceto no caso de altera\xE7\xF5es quanto a novas fun\xE7\xF5es ou que sejam feitas para atender a demandas legal, voc\xEA ser\xE1 notificado com 30 dias de anteced\xEAncia \xE0 vig\xEAncia quanto ao caso de altera\xE7\xF5es a esses Termos que afetem direitos ou obriga\xE7\xF5es de qualquer parte deste Termos, por exemplo, atrav\xE9s de notifica\xE7\xE3o pelo servi\xE7o ou por um e-mail enviado \xE0 conta de e-mail associada \xE0 sua conta. Ao continuar a acessar ou utilizar os Servi\xE7os ap\xF3s a data de entrada em vigor das revis\xF5es, voc\xEA aceita sujeitar-se \xE0 vers\xE3o alterada dos Termos."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Se voc\xEA mora fora da Uni\xE3o Europeia, dos Pa\xEDses da Associa\xE7\xE3o Europeia de Livre Com\xE9rcio ou do Reino Unido, inclusive se voc\xEA mora no Brasil, as leis do Estado de S\xE3o Paulo, excluindo suas disposi\xE7\xF5es legais, reger\xE3o estes termos qualquer disputa que surgir entre voc\xEA e nossa Empresa. Todas as disputas relacionadas a esses termos ou Servi\xE7os ser\xE3o apresentadas exclusivamente nos tribunais federais ou estaduais localizados no Estado de S\xE3o Paulo, Brasil e voc\xEA concorda com a jurisdi\xE7\xE3o pessoal e renuncia a qualquer obje\xE7\xE3o quanto a um f\xF3rum inconveniente."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Caso qualquer cl\xE1usula destes Termos seja considerada inv\xE1lida ou inexequ\xEDvel, essa cl\xE1usula ser\xE1 considerada limitada ou exclu\xEDda na menor extens\xE3o poss\xEDvel para que a parte remanescente dos Termos se mantenha v\xE1lida e produza os seus efeitos. A omiss\xE3o por nossa Empresa em exercer qualquer direito ou cl\xE1usula destes Termos n\xE3o ser\xE1 considerada uma ren\xFAncia a qualquer direito ou cl\xE1usula."), /*#__PURE__*/React.createElement(Typography.Paragraph, null, "Se voc\xEA mora fora da Uni\xE3o Europeia, dos Pa\xEDses da Associa\xE7\xE3o Europeia de Livre Com\xE9rcio ou do Reino Unido, inclusive se voc\xEA mora no Brasil, esses Termos s\xE3o um acordo entre voc\xEA e nossa Empresa. Se voc\xEA tiver alguma d\xFAvida sobre esses Termos, entre em contato conosco.")))];
};

var Components = {
  Link,
  Body,
  Widget,
  Privacy,
  Terms
};

//https://github.com/Upmostly/react-hooks-infinite-scroll

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) {
      setIsFetching(true);
    }
  }

  return [isFetching, setIsFetching];
};

// https://stackoverflow.com/a/53180013/8589328
var useUpdate = ((fn, inputs) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) fn();else didMountRef.current = true;
  }, inputs);
});

// https://pt-br.reactjs.org/docs/hooks-custom.html
var index = {
  useUpdate,
  useInfiniteScroll
};

export { Components, index as hooks };
