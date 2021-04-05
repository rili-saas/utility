import React from "react";

import { Row, Col, Typography } from "antd";
import { SafetyOutlined } from "@ant-design/icons";

import Components from ".";

const Terms = (props) => {
  return [
    <Row key="title" justify="center">
      <Typography.Title>
        <SafetyOutlined style={{ fontSize: "55px" }} />
        {"  "}
        Termos de Serviço
      </Typography.Title>
    </Row>,
    <Row key="content">
      <Col xs={24} md={24}>
        <Typography.Paragraph>
          Estes Termos de Serviço (“Termos”) regem seu acesso e uso de nossos
          serviços, incluindo nossos vários sites, SMS, APIs, notificações por
          e-mail, aplicativos, botões, widgets, anúncios, serviços comerciais, e
          nossos outros serviços cobertos que estão vinculados a estes Termos
          (coletivamente, os “Serviços”), e quaisquer informações, textos,
          links, gráficos, fotos, áudios, vídeos ou outros materiais ou
          disposição de materiais enviados, baixados ou exibidos nos Serviços
          (coletivamente denominados como “Conteúdo”). Ao utilizar os Serviços,
          você concorda em estar sujeito a estes Termos.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          1. Quem pode utilizar os Serviços
        </Typography.Title>
        <Typography.Paragraph>
          Você pode utilizar os Serviços somente se concordar em celebrar um
          contrato vinculante conosco e não for uma pessoa impedida de receber
          serviços sob as leis da jurisdição aplicável. Em qualquer hipótese,
          você deve ter no mínimo 13 anos de idade, para utilizar os Serviços.
          Se estiver aceitando estes Termos e utilizando os Serviços em nome de
          uma empresa, organização, governo ou outra entidade legal, você
          declara e garante que está autorizado a realizar tal ação e que tem
          poderes para vincular referida entidade a estes Termos, hipótese em
          que as palavras "você" e "seu" conforme utilizadas nestes Termos farão
          referência a tal entidade.
        </Typography.Paragraph>

        <Typography.Title level={3}>2. Privacidade</Typography.Title>
        <Typography.Paragraph>
          Nossa{" "}
          <Components.Link to="/privacy">
            Política de Privacidade
          </Components.Link>{" "}
          descreve como manuseamos as informações fornecidas ao utilizar nossos
          Serviços. Você entende que, ao utilizar os Serviços, concorda com a
          coleta e uso (conforme estabelecido na Política de Privacidade) dessas
          informações, incluindo a transferência dessas informações para os
          Estados Unidos, Irlanda e/ou outros países para fins de armazenamento,
          processamento e uso por nossa Emprasa e suas afiliadas.
        </Typography.Paragraph>

        <Typography.Title level={3}>3. Conteúdo nos Serviços</Typography.Title>
        <Typography.Paragraph>
          Você é responsável por seu uso dos Serviços e por qualquer Conteúdo
          fornecido, incluindo a conformidade com leis, regras e regulamentos
          aplicáveis. Você só deve fornecer Conteúdo com o qual esteja
          confortável em compartilhar com outras pessoas.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Qualquer uso ou confiança em qualquer Conteúdo ou materiais publicados
          pelos Serviços ou obtidos por você pelos Serviços é de sua inteira
          responsabilidade. Não aprovamos, apoiamos, declaramos nem garantimos a
          integridade, veracidade, exatidão ou confiabilidade de qualquer
          Conteúdo ou comunicado publicado pelos Serviços, tampouco endossamos
          opiniões expressas por eles. Você compreende que, ao utilizar os
          Serviços, pode estar exposto a Conteúdo ofensivo, prejudicial,
          impreciso, inadequado ou, em alguns casos, a publicações identificadas
          de modo indevido ou fraudulentas. Todo o Conteúdo é de
          responsabilidade exclusiva da pessoa que o criar. Não podemos
          monitorar ou controlar o Conteúdo postado pelos Serviços, e não
          podemos nos responsabilizar por tal Conteúdo.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Reservamo-nos ao direito de remover o Conteúdo que viole o Acordo do
          Usuário, incluindo, por exemplo, violações de direitos autorais ou de
          marcas comerciais ou outra apropriação indébita de propriedade
          intelectual, falsidade ideológica, conduta ilegal ou assédio. Constam
          informações relacionadas às políticas específicas e ao processo para
          denunciar ou reclamar quanto a violação em nossa central de ajuda.
        </Typography.Paragraph>

        <Typography.Title level={4}>
          Seus Direitos e a Concessão de Direitos sobre o Conteúdo
        </Typography.Title>
        <Typography.Paragraph>
          Você manterá seus direitos sobre qualquer Conteúdo que enviar,
          publicar ou exibir nos Serviços ou por meio deles. O que for seu será
          seu; você é o proprietário do seu Conteúdo (e seus áudios, fotos e
          vídeos incorporados são considerados parte do Conteúdo).
        </Typography.Paragraph>
        <Typography.Paragraph>
          Ao enviar, publicar ou exibir Conteúdo nos Serviços ou por meio deles,
          você nos outorga uma licença mundial gratuita, não exclusiva (com
          direito a sublicenciar) para utilizar, copiar, reproduzir, processar,
          adaptar, modificar, publicar, transmitir, exibir e distribuir esse
          Conteúdo em qualquer e todos os tipos de mídia ou métodos de
          distribuição já disponíveis ou que venham a ser desenvolvidos (para
          maior clareza, esses direitos incluem, por exemplo, curadoria,
          transformação, e tradução). Esta licença nos autoriza a tornar seu
          Conteúdo disponível para o restante do mundo e permite que outros
          usuários façam o mesmo. Você concorda que esta licença outorga a nossa
          Empresa o direito de fornecer, promover e melhorar os Serviços, além
          de tornar o Conteúdo enviado para ou por meio dos Serviços disponível
          a outras empresas, organizações ou pessoas que são parceiras de nossa
          Empresa para fins de distribuição, Retweet, transmissão, divulgação ou
          publicação dele em outros tipos de mídia e serviços, sujeitando-se aos
          nossos termos e condições de utilização de Conteúdo. Tais usos
          adicionais por parte de nossa Empresa ou de outras empresas,
          organizações ou indivíduos parceiros de nossa Empresa ocorre sem que
          lhe seja devida qualquer remuneração pelo Conteúdo que você enviar,
          publicar, transmitir ou, de outra maneira, disponibilizar por meio dos
          Serviços uma vez que o uso dos Serviços por você é acordado como
          compensação suficiente pelo Conteúdo e pela concessão de direitos aqui
          contidos.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Nossa Empresa tem um conjunto de regras em constante evolução
          relacionadas à forma como os parceiros do ecossistema podem interagir
          com o seu Conteúdo nos Serviços de nossa Empresa. Tais regras existem
          para possibilitar a existência de um ecossistema aberto, levando em
          consideração os seus direitos. Você entende que podemos modificar ou
          adaptar seu Conteúdo, uma vez que ele tenha sido distribuído,
          publicado ou transmitido por nossa Empresa ou nossos parceiros e/ou
          fazer alterações em seu Conteúdo para adaptá-lo a diferentes tipos de
          mídia.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Você declara e garante que possui ou que obteve todos os direitos,
          licenças, consentimentos, permissões, poderes e/ou autorizações
          necessários para outorgar os direitos aqui citados para qualquer
          Conteúdo enviado, postado ou exibido por você nos Serviços ou por meio
          deles. Você concorda que o Conteúdo não conterá materiais protegidos
          por direitos autorais ou outros direitos exclusivos a menos que você
          tenha a permissão necessária ou seja de outra forma legalmente
          autorizado a postar o material e a conceder a nossa Empresa a licença
          descrita acima.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          4. Utilização dos Serviços
        </Typography.Title>
        <Typography.Paragraph>
          Revise as Regras de nossa Empresa e políticas, que fazem parte do
          Acordo do Usuário e descrevem o que é proibido nos Serviços. Você pode
          utilizar os Serviços somente em conformidade com estes Termos e todas
          as leis, regras e regulamentos aplicáveis.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Nossos Serviços evoluem constantemente. Sendo assim, os Serviços podem
          ser alterados de tempos em tempos, a nosso exclusivo critério. Podemos
          interromper (permanente ou temporariamente) o fornecimento dos
          Serviços ou quaisquer recursos nos Serviços para você ou usuários em
          geral. Também podemos manter o direito de criar limites de uso e
          armazenamento, a nosso exclusivo critério e a qualquer momento. Nós
          também podemos remover ou recusar a distribuição de qualquer Conteúdo
          nos Serviços, limitar a distribuição ou visibilidade de qualquer
          Conteúdo no serviço, suspender ou encerrar contas de usuários e
          recuperar nomes de usuários sem responsabilidade perante você.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Em consideração a nossa Empresa por conceder a você acesso e uso dos
          Serviços, você concorda que nossa Empresa e seus provedores de
          terceiros e parceiros podem colocar anúncios nos Serviços ou em
          conexão com a exibição do Conteúdo ou de informações dos Serviços,
          enviados por você ou por outras pessoas. Você também concorda em não
          fazer uso indevido de nossos Serviços, por exemplo, interferindo ou
          acessando-os por meio de um método que não seja a interface e as
          instruções fornecidas por nossa Empresa. Você não pode realizar
          nenhuma das seguintes ações ao acessar ou utilizar os Serviços: (i)
          acessar, adulterar ou utilizar áreas não públicas dos Serviços, os
          sistemas de computadores de nossa Empresa ou os sistemas de entrega
          técnica dos fornecedores de nossa Empresa; (ii) sondar, examinar ou
          testar as vulnerabilidades de qualquer sistema ou rede, ou violar ou
          neutralizar qualquer medida de segurança ou autenticação; (iii)
          acessar ou pesquisar, ou tentar acessar ou pesquisar os Serviços por
          quaisquer meios (automatizados ou de qualquer outra maneira) de outra
          forma que não por meio das interfaces publicadas e atualizadas
          disponibilizadas por nossa Empresa (e sujeito aos respectivos termos e
          condições), exceto quando você tenha sido especificamente autorizado a
          realizar esses atos por meio de um acordo separado com o nossa Empresa
          (OBS.: o crawling ou recurso a indexadores automáticos nos Serviços é
          admissível desde que efetuado de acordo com os termos e condições
          constantes do arquivo robots.txt; não obstante, é expressamente
          proibido o scraping dos Serviços sem o consentimento prévio de nossa
          Empresa); (iv) forjar o cabeçalho de qualquer pacote TCP/IP ou
          qualquer parte da informação constante do cabeçalho de qualquer e-mail
          ou publicação, assim como utilizar os Serviços de qualquer forma para
          enviar informação identificadora de origem alterada, enganosa ou
          falsa; ou (v) interferir ou prejudicar, (ou tentar assim o fazer), o
          acesso de qualquer usuário, prestador de serviços de hosting
          (armazenagem principal ou em servidor) ou de rede, incluindo, sem
          limitação, por meio de atos como o envio de vírus, overloading
          (sobrecarga), flooding, envio de spam (comunicações não solicitadas)
          e-mail-bombing direcionados aos Serviços, ou por meio do uso de
          scripts para a criação de Conteúdo de maneira que interfira com os
          Serviços ou crie uma carga excessiva neles. Também nos reservamos o
          direito de acessar, ler, preservar e divulgar quaisquer informações
          que acreditarmos ser razoavelmente necessárias para (i) satisfazer
          solicitação governamental de qualquer lei, regulamento ou processo
          jurídico aplicável, (ii) cumprir os Termos, incluindo a investigação
          de possíveis violações deste Acordo, (iii) detectar, prevenir ou, de
          outra forma lidar com fraude, segurança ou problemas técnicos, (iv)
          responder solicitações de suporte do usuário, ou (v) proteger os
          direitos, propriedade ou segurança de nossa Empresa, de seus usuários
          e do público. Nossa Empresa não divulga informações pessoais a
          terceiros, exceto de acordo com nossa Política de Privacidade.
        </Typography.Paragraph>

        <Typography.Title level={4}>Sua conta</Typography.Title>
        <Typography.Paragraph>
          Você pode precisar criar uma conta para utilizar alguns de nossos
          Serviços. Você é responsável por proteger sua conta, portanto, use uma
          senha forte e limite seu uso para esta conta. Nós não podemos ser e
          não seremos responsáveis por qualquer perda ou dano resultante do seu
          não cumprimento com o descrito acima.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Você pode controlar a maioria das comunicações a partir dos Serviços.
          Talvez nossa Empresa precise enviar a você certas comunicações, como
          anúncios de serviços e mensagens administrativas. Essas comunicações
          são consideradas parte dos Serviços e da sua conta, e você não
          conseguirá cancelar o recebimento delas. Se você adicionou seu número
          de telefone em sua conta e posteriormente mudar ou desativar esse
          número de telefone, será necessário atualizar suas informações da
          conta para ajudar a evitar que nossa Empresa entre em contato com
          qualquer pessoa que compre seu número antigo.
        </Typography.Paragraph>

        <Typography.Title level={4}>
          Sua licença para utilizar os Serviços
        </Typography.Title>
        <Typography.Paragraph>
          Nossa Empresa oferece a você uma licença pessoal, mundial, não
          atribuível e não exclusiva, para utilizar o software fornecido a você
          como parte dos Serviços. Essa licença possui a finalidade exclusiva de
          permitir que você utilize e aproveite o benefício dos Serviços,
          conforme descrito por nossa Empresa, na maneira permitida por estes
          Termos.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Os Serviços são protegidos por direitos autorais, marcas registradas e
          outras leis do Brasil e de outros países. Nada nos Termos outorga a
          você o direito de utilizar o nome de nossa Empresa ou quaisquer marcas
          registradas, logotipos, nomes de domínio, outras características
          distintivas de sua marca, e outros direitos de propriedade. Todos os
          direitos, títulos e interesses sobre e relacionados aos Serviços
          (exceto aqueles relacionados ao Conteúdo fornecido pelos usuários) são
          e continuarão sendo propriedade exclusiva de nossa Empresa e de seus
          licenciadores. Quaisquer feedback, comentários ou sugestões fornecidos
          com relação a nossa Empresa ou os Serviços são totalmente voluntários
          e poderão ser utilizados como feedback, comentários ou sugestões de
          acordo com nossa conveniência e sem que haja qualquer obrigação
          perante você.
        </Typography.Paragraph>

        <Typography.Title level={4}>Cessação destes Termos</Typography.Title>

        <Typography.Paragraph>
          Você poderá cessar seu acordo legal com nossa Empresa a qualquer
          momento desativando suas contas e descontinuando o uso dos Serviços.
          Consulte a{" "}
          <Components.Link to="/privacy">
            Política de Privacidade
          </Components.Link>{" "}
          para mais informações sobre o que acontece com suas informações.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Poderemos suspender ou encerrar sua conta ou parar de fornecer a você
          toda ou qualquer parte dos Serviços a qualquer momento e por qualquer
          motivo, inclusive – sem limitação – se tivermos motivo para acreditar
          que: (i) você violou estes Termos, as Regras e Políticas de nossa
          Empresa ou as Diretrizes de Comunidade do Periscope; (ii) você
          representa um risco ou possível risco jurídico para nós; (iii) sua
          conta deva ser removida devido a conduta ilegal; (iv) sua conta deva
          ser removida devido a inatividade prolongada; ou (v) o fornecimento
          dos nossos Serviços a você não é mais viável comercialmente. Nós
          realizaremos esforços razoáveis para notificá-lo por e-mail pelo
          endereço associado à sua conta ou na próxima ocasião em que você
          tentar acessar sua conta, dependendo das circunstâncias. Em todas as
          hipóteses acima, terminará a vigência dos Termos, inclusive, sem
          limitação, sua licença de uso dos Serviços, com exceção das seguintes
          cláusulas, que permanecerão em vigor: II, III, V, e VI. Se você achar
          que sua conta foi excluída por engano, você poderá fazer uma
          reclamação seguindo os passos descritos na central de ajuda. Para
          evitar dúvidas, estes Termos sobrevivem à desativação ou encerramento
          da sua conta.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          5. Isenções e Limitações de Responsabilidade
        </Typography.Title>
        <Typography.Title level={3}>
          Os Serviços estão disponíveis "COMO ESTÃO"
        </Typography.Title>
        <Typography.Paragraph>
          Se você mora fora da União Europeia, dos Países da Associação Europeia
          de Livre Comércio ou Reino Unido, inclusive se você mora no Brasil,
          você concorda que o seu acesso e uso dos Serviços ou de qualquer
          Conteúdo é por sua conta e risco. Você entende e concorda que os
          Serviços são fornecidos a você "COMO ESTÃO" e "COMO DISPONÍVEIS". As
          "Entidades de nossa Empresa" se referem a nossa Empresa, suas
          matrizes, afiliadas, empresas relacionadas, executivos, diretores,
          funcionários, agentes, representantes, parceiros e licenciadores. Sem
          limitar o acima exposto, na extensão máxima permitida pela lei
          aplicável, AS ENTIDADES DE NOSSA EMPRESA REJEITAM TODAS AS GARANTIAS E
          CONDIÇÕES, EXPRESSAS OU IMPLÍCITAS, DE COMERCIABILIDADE, ADEQUAÇÃO A
          UMA FINALIDADE ESPECÍFICA OU NÃO VIOLAÇÃO. As Entidades de nossa
          Empresa não dão garantia ou representação e se eximem de toda e
          qualquer responsabilidade por: (i) integridade, precisão,
          disponibilidade, pontualidade, segurança ou confiabilidade dos
          Serviços ou de qualquer Conteúdo; (ii) qualquer dano ao sistema do seu
          computador, perda de dados ou outro dano resultante do seu acesso ou
          uso dos Serviços ou de qualquer Conteúdo; (iii) a exclusão ou a falha
          em armazenar ou transmitir qualquer Conteúdo e outras comunicações
          mantidas pelos Serviços; e (iv) se os Serviços atenderão aos seus
          requisitos ou estarão disponíveis de forma ininterrupta, segura ou sem
          erros. Nenhum conselho ou informação, oral ou escrita, obtida das
          Entidades do nossa Empresa ou através dos Serviços, criará qualquer
          garantia ou representação não expressamente feita aqui.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          Limitação de Responsabilidade
        </Typography.Title>

        <Typography.Paragraph>
          Se você mora fora da União Europeia, dos Países da Associação Europeia
          de Livre Comércio ou Reino Unido, inclusive se você mora no Brasil,
          VOCÊ CONCORDA QUE ATÉ O MÁXIMO PERMITIDO PELA LEI APLICÁVEL, AS
          ENTIDADES DE NOSSA EMPRESA NÃO SERÃO RESPONSÁVEIS POR QUAISQUER DANOS
          INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS, OU
          QUALQUER PERDA DE LUCROS OU RECEITAS, SEJA OCORRIDA DIRETAMENTE OU
          INDIRETAMENTE, OU QUALQUER PERDA DE DADOS, USO, BENEVOLÊNCIA OU OUTRAS
          PERDAS INTANGÍVEIS, RESULTANTES DE (i) SEU ACESSO AO OU USO DOS OU
          INABILIDADE DE ACESSAR OU USAR OS SERVIÇOS; (ii) QUALQUER CONDUTA OU
          CONTEÚDO DE TERCEIROS NOS SERVIÇOS, INCLUINDO SEM LIMITAÇÃO, QUALQUER
          CONDUTA DIFAMATÓRIA, OFENSIVA OU ILEGAL DE OUTROS USUÁRIOS OU
          TERCEIROS; (iii) QUALQUER CONTEÚDO OBTIDO PELOS SERVIÇOS; OU (iv)
          ACESSO, USO OU ALTERAÇÃO NÃO AUTORIZADOS DE SUAS TRANSMISSÕES OU
          CONTEÚDO. EM NENHUM CASO A RESPONSABILIDADE AGREGADA DAS ENTIDADES DE
          NOSSA EMPRESA EXCEDERÁ O VALOR DE UM CENTAVO DE REAIS ( R$ 0,01) OU O
          VALOR PAGO A NOSSA EMPRESA, SE FOR O CASO, NOS ÚLTIMOS SEIS MESES
          PELOS SERVIÇOS DANDO ORIGEM À REIVINDICAÇÃO. AS LIMITAÇÕES DESTA
          SUBSEÇÃO SE APLICARÃO A QUALQUER HIPÓTESE DE RESPONSABILIDADE, SEJA
          BASEADA EM GARANTIA, CONTRATO, ESTATUTO, DANO (INCLUINDO NEGLIGÊNCIA)
          OU DE OUTRO MODO, E INDEPENDENTEMENTE DE AS ENTIDADES DE NOSSA EMPRESA
          TEREM SIDO INFORMADAS DA POSSIBILIDADE DE QUALQUER DANO, E MESMO SE UM
          RECURSO ESTABELECIDO NESTE TERMO TENHA FALHADO EM SEU OBJETIVO
          ESSENCIAL.
        </Typography.Paragraph>

        <Typography.Title level={3}>6. Geral</Typography.Title>
        <Typography.Paragraph>
          Poderemos revisar estes Termos de tempos em tempos. As modificações
          não serão retroativas, e a versão mais atualizada dos Termos, que
          estará sempre disponivel, regerá nossa relação com você. Exceto no
          caso de alterações quanto a novas funções ou que sejam feitas para
          atender a demandas legal, você será notificado com 30 dias de
          antecedência à vigência quanto ao caso de alterações a esses Termos
          que afetem direitos ou obrigações de qualquer parte deste Termos, por
          exemplo, através de notificação pelo serviço ou por um e-mail enviado
          à conta de e-mail associada à sua conta. Ao continuar a acessar ou
          utilizar os Serviços após a data de entrada em vigor das revisões,
          você aceita sujeitar-se à versão alterada dos Termos.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Se você mora fora da União Europeia, dos Países da Associação Europeia
          de Livre Comércio ou do Reino Unido, inclusive se você mora no Brasil,
          as leis do Estado de São Paulo, excluindo suas disposições legais,
          regerão estes termos qualquer disputa que surgir entre você e nossa
          Empresa. Todas as disputas relacionadas a esses termos ou Serviços
          serão apresentadas exclusivamente nos tribunais federais ou estaduais
          localizados no Estado de São Paulo, Brasil e você concorda com a
          jurisdição pessoal e renuncia a qualquer objeção quanto a um fórum
          inconveniente.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Caso qualquer cláusula destes Termos seja considerada inválida ou
          inexequível, essa cláusula será considerada limitada ou excluída na
          menor extensão possível para que a parte remanescente dos Termos se
          mantenha válida e produza os seus efeitos. A omissão por nossa Empresa
          em exercer qualquer direito ou cláusula destes Termos não será
          considerada uma renúncia a qualquer direito ou cláusula.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Se você mora fora da União Europeia, dos Países da Associação Europeia
          de Livre Comércio ou do Reino Unido, inclusive se você mora no Brasil,
          esses Termos são um acordo entre você e nossa Empresa. Se você tiver
          alguma dúvida sobre esses Termos, entre em contato conosco.
        </Typography.Paragraph>
      </Col>
    </Row>,
  ];
};

export default Terms;
