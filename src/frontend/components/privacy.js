import React from "react";

import { Row, Col, Typography, List } from "antd";
import { LockOutlined } from "@ant-design/icons";

import Components from ".";

const Privacy = (props) => {
  return [
    <Row key="title" justify="center">
      <Typography.Title>
        <LockOutlined style={{ fontSize: "55px" }} />
        {"  "}
        Política de Privacidade
      </Typography.Title>
    </Row>,
    <Row key="content">
      <Col xs={24} md={24}>
        <Typography.Paragraph>
          Acreditamos que você sempre deve saber quais dados coletamos de você e
          como os usamos, e que você deve ter um controle significativo sobre
          isso. Queremos capacitá-lo para tomar as melhores decisões sobre as
          informações que você compartilha conosco.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Esse é o objetivo desta Política de Privacidade.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          Você deve ler esta política na íntegra, mas aqui estão algumas coisas
          importantes que esperamos que você guarde:
        </Typography.Title>

        <List>
          <List.Item>
            Nossa Empresa é pública e parte de seu conteúdo estará imediatamente
            visíveis e pesquisáveis por qualquer pessoa em todo o mundo. Também
            oferecemos a você maneiras não públicas de se comunicar em nossos
            Serviços, por meio de Mensagens Diretas. Você também pode usar
            nossos Serviços sob um pseudônimo se preferir não usar seu nome.
          </List.Item>
          <List.Item>
            Quando você usar nossos Serviços, mesmo que esteja somente olhando
            seu conteúdo, recebemos algumas informações pessoais de você, como o
            tipo de dispositivo que você está usando e o seu endereço IP. Você
            pode optar por compartilhar informações adicionais conosco, como seu
            endereço de e-mail, número de telefone, contatos do catálogo de
            endereços e um perfil público. Usamos essas informações para coisas
            como manter sua conta segura e mostrar a você Conteúdos mais
            relevantes, pessoas para seguir, eventos e anúncios.
          </List.Item>
          <List.Item>
            Fornecemos controle a você por meio de suas configurações para
            limitar os dados que coletamos de você e como os usamos, além de
            controlar itens como segurança da conta, preferências de marketing,
            aplicativos que podem acessar sua conta e contatos do catálogo de
            endereços que você subiu em nossos Serviços. Você também pode fazer
            o download das informações que você compartilhou em nossos Serviços.
          </List.Item>
          <List.Item>
            Além das informações que você compartilha conosco, usamos seus
            Conteúdos o conteúdo que você leu, Curtiu ou fez realizou uma
            intereção, e outras informações para determinar em quais tópicos
            você está interessado, sua idade, os idiomas que você fala e outros
            sinais para mostrar conteúdo mais relevante para você. Nós
            oferecemos transparência nessas informações, e você pode
            modificá-las ou corrigi-las a qualquer momento.
          </List.Item>
          <List.Item>
            Se você tiver dúvidas sobre esta política, sobre como coletamos ou
            processamos seus dados pessoais ou sobre qualquer outra coisa
            relacionada a nossas práticas de privacidade, gostaríamos de saber a
            sua opinião. Você pode entrar em contato conosco a qualquer momento.
          </List.Item>
        </List>

        <Typography.Paragraph>
          Você pode utilizar os Serviços somente se concordar em celebrar um
          contrato vinculante com nossa Empresa e não for uma pessoa impedida de
          receber serviços sob as leis da jurisdição aplicável. Em qualquer
          hipótese, você deve ter no mínimo 13 anos de idade, para utilizar os
          Serviços. Se estiver aceitando estes Termos e utilizando os Serviços
          em nome de uma empresa, organização, governo ou outra entidade legal,
          você declara e garante que está autorizado a realizar tal ação e que
          tem poderes para vincular referida entidade a estes Termos, hipótese
          em que as palavras "você" e "seu" conforme utilizadas nestes Termos
          farão referência a tal entidade.
        </Typography.Paragraph>

        <Typography.Title>
          1. Informações que você compartilha conosco
        </Typography.Title>
        <Typography.Paragraph>
          Nós requeremos determinadas informações para fornecer nossos serviços
          para você. Por exemplo, você precisa ter uma conta para subir ou
          compartilhar conteúdo em nossa Empresa. Quando você optar por
          compartilhar as informações abaixo conosco, nós as coletaremos e
          usaremos para operar nossos serviços.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          1.1 Informações Básicas da Conta
        </Typography.Title>
        <Typography.Paragraph>
          Você não precisa criar uma conta para usar alguns dos recursos dos
          nossos serviços, como buscar e visualizar perfis públicos de usuários
          em nossa Empresa. Se você optar por criar uma conta, você precisa nos
          fornecer alguns dados pessoais para que possamos fornecer nossos
          serviços a você. Em nossa Empresa, isso inclui um nome de exibição
          (por exemplo, “Momentos”), um nome de usuário (por exemplo,
          @Momentos), uma senha e um endereço de e-mail ou número de telefone.
          Seu nome de exibição e nome de usuário são sempre públicos, mas você
          pode usar seu nome real ou um pseudônimo. Você também pode criar e
          gerenciar múltiplas contas em nossa Empresa, por exemplo, para
          expressar diferentes partes de sua identidade.
        </Typography.Paragraph>

        <Typography.Title level={3}>1.2 Informações Públicas</Typography.Title>
        <Typography.Paragraph>
          uma parte das atividades em nossa Empresa é pública, inclusive suas
          informações de perfil, seu fuso-horário e idioma, quando você criou a
          sua conta e seus Conteúdo e determinadas informações sobre seus
          Conteúdos como a data, horário, aplicativo e versão de nossos Serviços
          onde você fez seu Conteúdo. Você também pode optar por publicar a sua
          localização nos seus Conteúdos e no seu perfil em nossa Empresa. Se
          você gostar, compartilhar, responder ou se envolver publicamente com
          um anúncio em nossos serviços, esse anunciante poderá, assim, aprender
          informações sobre você associadas ao anúncio com o qual você se
          envolveu, como características do público-alvo que o anúncio deveria
          atingir. Seus corações, comentários, o número de corações que você
          recebeu, votações, as contas das quais você é um Superfan, e se você
          assistiu a uma transmissão ao vivo ou em replay, também são públicos.
          Quaisquer corações, comentários ou outro conteúdo que você contribuir
          para a transmissão de outra conta permanecerão sendo parte daquela
          transmissão enquanto ela permanecer no Periscope. Informações
          publicadas sobre você por outras pessoas que usam nossos serviços
          também podem ser públicas. Por exemplo, outras pessoas podem marcá-lo
          em uma foto (se suas configurações permitirem) ou mencioná-lo em um
          Conteúdo.
        </Typography.Paragraph>

        <Typography.Paragraph>
          Ao compartilhar publicamente um conteúdo através de um Conteúdo, você
          está nos instruindo a divulgar essas informações da maneira mais ampla
          possível, inclusive por meio de nossas APIs, e direcionando àqueles
          que acessam as informações por meio de nossas APIs a fazer o mesmo.
          Para facilitar a rápida disseminação global de Conteúdos para pessoas
          em todo o mundo, usamos tecnologias coinformaçõesmo interfaces de
          programação de aplicativos (APIs) e incorporamos para disponibilizar
          algumas dessas para sites, aplicativos e para outros usos - por
          exemplo, para exibir Conteúdo em um site de notícias ou analisar o que
          as pessoas dizem em nosso Serviço. Geralmente, disponibilizamos esse
          conteúdo em quantidades limitadas gratuitamente e cobramos taxas de
          licenciamento para acesso em larga escala. Temos termos padrão que
          governam como esses dados podem ser usados e um programa de
          conformidade para aplicar esses termos. Mas esses indivíduos e
          empresas não são afiliados a nossa Empresa, e suas ofertas podem não
          refletir as atualizações que você faz em nossa Empresa.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          1.3 Informações de Contato e Catálogos de Endereços
        </Typography.Title>
        <Typography.Paragraph>
          Usamos suas informações de contato, como seu endereço de e-mail ou
          número de telefone, para autenticar sua conta e mantê-la, e para
          manter os nossos serviços, em segurança e para ajudar a prevenir spam,
          fraude e abuso. Também usamos informações de contato para personalizar
          nossos serviços, habilitar certos recursos da conta (por exemplo, para
          verificação de acesso ou via SMS), para enviar informações sobre
          nossos serviços e personalizar nossos serviços, incluindo anúncios. Se
          você fornecer a nossa Empresa seu número de telefone, você concorda em
          receber mensagens de texto de nossa Empresa nesse número, conforme
          permitido pelas leis do seu país. Nossa Empresa também usa suas
          informações de contato para direcionar marketing a você conforme as
          leis do seu país permitirem, e para ajudar outras pessoas a encontrar
          sua conta, se suas configurações permitirem, inclusive por meio de
          serviços de terceiros e aplicativos clientes. Você poderá utilizar
          suas configurações de notificações por e-mail e por celular para
          controlar as notificações que receber de nossa Empresa. Você também
          poderá descontinuar o recebimento de uma notificação seguindo as
          instruções contidas na notificação ou aqui.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Você pode escolher fazer o upload e sincronizar sua lista de contatos
          em nossa Empresa para que possamos ajudá-lo a encontrar e a se
          conectar com pessoas que você conheça, ou ajudar outras pessoas a
          encontrar e se conectar com você. Também usamos essas informações para
          recomendar melhor o conteúdo para você e outras pessoas.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Você pode se registrar em nossa Empresa com uma conta de outro serviço
          como Twitter, Google ou Facebook. Se você fizer isso, usaremos as
          informações desse serviço, inclusive seu endereço de e-mail, amigos ou
          lista de contatos, para recomendar outras contas ou conteúdo para
          você, ou para recomendar sua conta ou conteúdo para outras pessoas.
          Você pode controlar se a sua conta no Periscope pode ser descoberta
          por e-mail por meio de suas configurações do Periscope.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Caso você entre em contato conosco por e-mail, nós manteremos o
          conteúdo da sua mensagem, seu endereço de e-mail e suas informações de
          contato para responder à sua solicitação.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          1.4 Mensagens Diretas e Comunicações Não Públicas
        </Typography.Title>
        <Typography.Paragraph>
          Fornecemos determinados recursos que permitem que você possa se
          comunicar de maneira mais privada ou controlar quem vê o seu conteúdo.
          Por exemplo, você pode usar Mensagens Diretas para ter conversas não
          públicas em nossa Empresa. Quando você se comunicar com outras pessoas
          ao enviar e receber Mensagens Diretas, nós armazenaremos e
          processaremos suas comunicações e informações relacionadas a elas.
          Isso inclui a verificação de links para conteúdo nocivo, a redução de
          links, a detecção de spam, abuso, imagens proibidas, e uso de
          problemas relatados. Também usamos informações sobre com quem você se
          comunicou e quando (mas não o conteúdo dessas comunicações) para
          entender melhor o uso de nossos serviços, para proteger a segurança e
          integridade de nossa plataforma e para mostrar conteúdo mais
          relevante. Nós compartilhamos o conteúdo de suas Mensagens Diretas com
          as pessoas para as quais você as enviou; nós não os usamos para
          veicular anúncios. Observe que, se você interagir de uma maneira que
          seja normalmente pública com conteúdo de nossos Serviços compartilhado
          com você por Mensagem Direta, por exemplo, ao curtir um Conteúdo,
          essas interações serão públicas. Quando você usar recursos como
          Mensagens Diretas para se comunicar, lembre-se de que os destinatários
          têm sua própria cópia de suas comunicações de nossos Serviços - mesmo
          que você exclua sua cópia dessas mensagens da sua conta - que eles
          podem duplicar, armazenar ou compartilhar novamente.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          1.5 Informações de Pagamento
        </Typography.Title>
        <Typography.Paragraph>
          Você pode nos fornecer informações de pagamento, inclusive seu número
          de cartão de crédito ou débito, data de validade do cartão, código de
          validação e endereço de faturamento, para comprar publicidade ou
          outras ofertas fornecidas como parte de nossos serviços.
        </Typography.Paragraph>

        <Typography.Title>
          2. Informações Adicionais que Recebemos Sobre Você
        </Typography.Title>
        <Typography.Paragraph>
          Recebemos determinadas informações quando você usa nossos serviços ou
          outros sites ou aplicativos móveis que incluem nosso conteúdo e de
          terceiros, inclusive anunciantes. Assim como as informações que você
          compartilha conosco, usamos os dados abaixo para operar nossos
          serviços.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          2.1 Informações de Localização
        </Typography.Title>
        <Typography.Paragraph>
          Nós requeremos informações sobre seu registro e localização atual, que
          obtemos de sinais como seu endereço IP ou configurações do
          dispositivo, para configurar e manter sua conta com segurança e
          confiabilidade e para fornecer nossos serviços a você.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Sujeito às suas configurações, podemos coletar, usar e armazenar
          informações adicionais sobre sua localização, como sua posição exata
          atual ou locais onde você usou anteriormente, para operar ou
          personalizar nossos serviços, inclusive com conteúdo mais relevante,
          como tendências locais, histórias, anúncios e sugestões de pessoas
          para seguir.
        </Typography.Paragraph>

        <Typography.Title level={3}>2.2 Links</Typography.Title>
        <Typography.Paragraph>
          Para operar nossos serviços, acompanhamos como você interage com os
          links em nossos serviços. Isso inclui links em e-mails que enviamos a
          você e links em Conteúdos que aparecem em outros sites ou aplicativos
          móveis.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Se você clicar em um link ou anúncio externo em nossos serviços, esse
          anunciante ou operador de site poderá inferir que você veio de nossos
          Serviços, além de outras informações associadas ao anúncio em que você
          clicou, como características do público destinado a ser alcançado.
          Eles também podem coletar de você outros dados pessoais, como
          identificadores de cookies ou seu endereço IP.
        </Typography.Paragraph>

        <Typography.Title level={3}>2.3 Cookies</Typography.Title>
        <Typography.Paragraph>
          Um cookie é um pequeno arquivo de dados que é armazenado em seu
          computador ou dispositivo móvel. Como muitos sites, usamos cookies e
          tecnologias semelhantes para coletar dados adicionais de uso do site e
          para operar nossos serviços. Os cookies não são requeridos para muitas
          partes de nossos serviços, como buscar e consultar perfis públicos.
          Embora a maioria dos navegadores da Web aceite cookies
          automaticamente, as configurações de muitos navegadores podem ser
          modificadas para recusar cookies ou alertá-lo quando um site estiver
          tentando inserir um cookie em seu computador. No entanto, é possível
          que alguns de nossos Serviços não funcionem adequadamente se você
          desativar os cookies. Quando seu navegador ou dispositivo permitir,
          nós usaremos cookies de sessão e cookies persistentes para entender
          melhor como você interage com nossos serviços, monitorar padrões de
          uso agregados, personalizar e operar nossos serviços, fornecer
          segurança de conta, personalizar o conteúdo que mostramos a você,
          inclusive anúncios, e lembrar suas preferências de idioma. Nós não
          oferecemos suporte à opção de navegador Não Rastrear. Saiba mais sobre
          como usamos cookies e outras tecnologias semelhantes aqui.
        </Typography.Paragraph>

        <Typography.Title level={3}>2.4 Dados de Registro</Typography.Title>
        <Typography.Paragraph>
          Nós recebemos informações quando você visualiza conteúdo em ou
          interage com nossos serviços, o que nós chamamos de “Dados de
          Registro”, mesmo se não tiver criado uma conta. Por exemplo, quando
          você visita os nossos sites, acessa os nossos serviços, interage com
          as nossas notificações por e-mail, utiliza a sua conta para se
          autenticar em um site, aplicativo ou serviço de terceiro, ou quando
          visita um site, aplicativo ou serviço de terceiro que inclua conteúdo
          de nossos Servicos, podemos receber informações sobre você. Esses
          Dados de Registro podem incluir informações como o seu endereço IP,
          tipo de navegador, sistema operacional, página da Web de origem,
          páginas da Web visitadas, localização, sua operadora de telefonia
          celular, informações de dispositivo (inclusive Ids de dispositivo e
          aplicativos), termos de pesquisa (incluindo aqueles que não foram
          enviados como consultas) e informações de cookies. Também recebemos
          Dados de Registro quando você clica, visualiza ou interage com links
          em nossos serviços, inclusive quando você instala outro aplicativo por
          meio de nossos Serviços. Usamos os Dados de Registro para operar
          nossos serviços e assegurar seu desempenho seguro, confiável e
          robusto. Por exemplo, usamos os Dados de Registro para proteger a
          segurança das contas e para determinar qual conteúdo é popular em
          nossos serviços. Também usamos esses dados para melhorar o conteúdo
          que mostramos a você, inclusive anúncios para melhorar a eficácia de
          nosso próprio marketing.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Usamos as informações que você nos fornece e os dados que recebemos,
          inclusive Dados de Registro e dados de terceiros, para fazer
          inferências sobre quais tópicos você pode estar interessado, sua idade
          e os idiomas que você fala. Isso nos ajuda a promover e desenhar
          melhor nossos serviços para você e a personalizar o conteúdo que
          mostramos, inclusive anúncios.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          2.5 Dados de nossos Serviços para a Web
        </Typography.Title>
        <Typography.Paragraph>
          Quando você visualiza nosso conteúdo em sites de terceiros que
          integram o conteúdo de nossos Serviços, como linhas de tempo
          incorporadas ou botões de compartilhamento, podemos receber Dados de
          Registro que incluem a página da Web que você visitou. Usamos essas
          informações para entender melhor o uso de nossos serviços, para
          proteger a segurança e integridade de nossa plataforma e para mostrar
          conteúdo mais relevante, inclusive anúncios. Não associamos esse
          histórico de navegação da Web com seu nome, endereço de e-mail, número
          de telefone ou nome de usuário, e o excluímos, obliteramos ou
          agregamos após 30 dias. Não coletamos esses dados de navegadores que
          acreditamos estar localizados na União Europeia ou nos países da
          Associação de Livre Comércio Europeia.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          2.6 Anunciantes e Outros Parceiros de Publicidade
        </Typography.Title>
        <Typography.Paragraph>
          A receita de publicidade nos permite prestar suporte e melhorar nossos
          serviços. Nós podemos utilizar as informações descritas nesta Política
          de Privacidade para ajudar a tornar nossa publicidade mais relevante
          para você, para medir sua eficácia e para ajudar a reconhecer seus
          dispositivos para podermos fornecer anúncios a você dentro e fora de
          nossos Serviços. Nossos parceiros de publicidade e afiliadas
          compartilham conosco informações como ID do cookie do navegador, ID do
          dispositivo móvel ou hash criptográfico de um endereço de e-mail,
          assim como dados demográficos ou de interesse e conteúdo visualizado
          ou ações tomadas em um site ou aplicativo. Alguns de nossos parceiros
          de publicidade, especialmente nossos anunciantes, também nos permitem
          coletar informações similares diretamente de seu site ou aplicativo ao
          integrar nossa tecnologia de publicidade. As informações
          compartilhadas por parceiros e afiliados de anúncios ou coletadas por
          nossos Serviços a partir de sites e aplicativos de parceiros e
          afiliados de anúncios podem ser combinadas com as outras informações
          que você compartilha com o nossos Serviços e que nossos Serviços
          recebe sobre você descrito em outra parte da nossa Política de
          Privacidade.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Nossos Serviços aderem aos Princípios de Autorregulamentação da
          Aliança de Publicidade Digital para Publicidade Comportamental On-line
          (também denominada “publicidade com base em interesses”) e respeita a
          ferramenta de escolha do consumidor da DAA (Digital Advertising
          Alliance [Aliança de Publicidade Digital]) para que você opte por não
          receber publicidade com base em interesses{" "}
          <Components.Link to="https://optout.aboutads.info">
            {" "}
            aqui
          </Components.Link>
          . Além disso, nossas políticas de anúncios também proíbem que
          anunciantes segmentem anúncios com base em categorias que
          considerarmos sensíveis ou proibidas pela legislação, como raça,
          religião, política, vida sexual ou saúde. Saiba mais sobre suas opções
          de privacidade para publicidade baseada em interesses aqui, e sobre
          como funcionam os anúncios em nossos serviços aqui.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Se você é um anunciante ou um anunciante potencial, processamos seus
          dados pessoais para ajudar a oferecer e fornecer nossos serviços de
          publicidade. Você pode atualizar seus dados entrando em contato
          conosco diretamente, conforme descrito nesta Política de Privacidade.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          2.7 Personalização com base em sua identidade inferida
        </Typography.Title>
        <Typography.Paragraph>
          Quando você se registra em nossos Serviços com um navegador ou
          dispositivo, nós associamos esse navegador ou dispositivo com a sua
          conta para finalidades como autenticação, segurança e personalização.
          Sujeito às suas configurações, também podemos associar a sua conta a
          navegadores ou dispositivos diferentes daqueles que você usa para se
          registrar em nossos Serviços (ou associar seu dispositivo ou navegador
          desconectado a outros navegadores ou dispositivos). Quando você
          fornece outras informações a nossso Serviços, incluindo um endereço de
          e-mail, associamos essas informações à sua conta . Sujeito às suas
          configurações, também podemos usar essas informações para inferir
          outras informações sobre sua identidade, por exemplo, associando sua
          conta a hashes de endereços de e-mail que compartilham componentes
          comuns com o endereço de e-mail que você forneceu a nossos Serviços.
          Fazemos isso para operar e personalizar nossos serviços. Por exemplo,
          se você visitar sites com conteúdo esportivo em seu laptop, poderemos
          mostrar-lhe anúncios relacionados a esporte em nossos Serviços para
          Android e, se o endereço de e-mail associado à sua conta compartilhar
          componentes com outro endereço de e-mail, como nome, sobrenome ou
          iniciais compartilhados, poderemos posteriormente corresponder a
          anúncios de anunciantes que estavam tentando acessar endereços de
          e-mail contendo esses componentes.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          2.10 Como Você Controla as Informações Adicionais que Recebemos
        </Typography.Title>
        <Typography.Paragraph>
          Suas Configurações de personalização e dados nossos Serviços permitem
          que você possa decidir:
          <br />
          Se lhe mostraremos publicidade com base em interesses dentro e fora de
          nossos Serviços
          <br />
          Como personalizamos com base em sua identidade inferida
          <br />
          Se coletamos e usamos sua localização exata
          <br />
          Se personalizamos sua experiência com base em onde você esteve
          <br />
          Se acompanhamos os sites em que você vê o conteúdo de nossos Serviços
        </Typography.Paragraph>

        <Typography.Paragraph>
          Você pode usar Seus dados em nossos Serviços para analisar:
          <br />
          Anunciantes que incluíram você em públicos-alvo personalizados para
          exibir anúncios para você
          <br />
          Dados demográficos e dados de interesse sobre a sua conta de nossos
          parceiros de publicidade
          <br />
          Informações que nossos Serviços tem sobre você, como sua faixa etária,
          sexo, idiomas e interesses
        </Typography.Paragraph>

        <Typography.Title>
          3. Informações que Compartilhamos e Divulgamos
        </Typography.Title>
        <Typography.Paragraph>
          Conforme observado acima, nossos Serviços foram desenhado para
          disseminar de maneira ampla e instantânea as informações que você
          compartilha publicamente por meio destes serviços. Nas circunstâncias
          limitadas em que divulgamos seus dados pessoais privados, nós o
          faremos sujeito ao seu controle, porque é importante para operar
          nossos serviços, ou porque é requerido pela legislação.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          3.1 Compartilhando Seu Controle
        </Typography.Title>
        <Typography.Paragraph>
          Nós compartilhamos ou divulgamos seus dados pessoais com o seu
          consentimento ou de acordo com as suas orientações, por exemplo,
          quando você autoriza que um cliente Web ou aplicativo de terceiros
          acesse a sua conta, ou quando você nos orienta a compartilhar seu
          feedback com uma empresa. Se você compartilhou informações como
          Mensagens Diretas Conteúdos protegidos com outra pessoa que acessar
          nossos Serviços utilizando um serviço de terceiros, lembre-se de que
          as informações poderão ser compartilhadas com o serviço de terceiros.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Sujeito às suas configurações, também fornecemos a terceiros
          determinados dados pessoais para nos ajudar a oferecer ou operar
          nossos serviços. Você pode saber mais sobre essas parcerias em nossa
          Central de Ajuda e controlar se nossos Serviços compartilham seus
          dados pessoais dessa maneira usando a opção “Permitir compartilhamento
          de informações adicionais com parceiros de negócios” em suas
          configurações de Personalização e Dados. (Esta configuração não
          controla o compartilhamento descrito em outras partes de nossa
          Política de Privacidade, como quando compartilhamos dados com nossos
          prestadores de serviços, ou através de parcerias diferentes das
          descritas na nossa Central de Ajuda.)
        </Typography.Paragraph>

        <Typography.Title level={3}>
          3.2 Prestadores de Serviços
        </Typography.Title>
        <Typography.Paragraph>
          Nós engajamos com prestadores de serviços para desempenhar funções e
          prestar serviços para nós no Brasil e em outros países. Por exemplo,
          nós usamos uma variedade de serviços de terceiros para nos ajudar a
          operar nossos serviços, como hospedagem de nossos diversos blogs e
          wikis, assim como para nos ajudar a compreender melhor a utilização
          dos nossos Serviços, como o Google Analytics. Nós podemos compartilhar
          seus dados pessoais privados com esses prestadores de serviços,
          sujeito a obrigações consistentes com esta Política de Privacidade e
          quaisquer outras medidas de confidencialidade e segurança adequadas, e
          sob a condição de que os terceiros utilizem seus dados pessoais
          privados somente em nosso nome e de acordo com as nossas instruções
          (os prestadores de serviços podem usar outros dados não pessoais para
          seu próprio benefício). Nós compartilhamos suas informações de
          pagamento com os prestadores de serviços de pagamento para processar
          pagamentos, prevenir, detectar e investigar fraudes ou outras
          atividades proibidas, facilitar a resolução de disputas como estornos
          ou reembolsos, e para outros objetivos associados à aceitação de
          cartões de crédito e débito.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          3.3 Legislação, Dano e Interesse Público
        </Typography.Title>
        <Typography.Paragraph>
          Não obstante qualquer disposição em contrário nesta Política de
          Privacidade ou nos controles que possamos oferecer a você, poderemos
          preservar, usar, compartilhar ou divulgar seus dados pessoais ou
          outros dados de segurança se acreditarmos que é razoavelmente
          necessário para o cumprimento de uma lei, regulamentação, processo
          legal ou solicitação governamental; para proteger a segurança de
          qualquer pessoa; para proteger a segurança ou integridade de nossa
          plataforma, inclusive para ajudar a prevenir spam, abuso ou agentes
          nocivos em nossos serviços, ou para explicar por que removemos
          conteúdo ou contas de nossos serviços8; para endereçar questões de
          fraude, segurança ou técnicas; ou para proteger nossos direitos ou
          propriedade ou os direitos ou propriedade daqueles que usam nossos
          serviços. No entanto, nada nesta Política de Privacidade tem por
          objetivo limitar quaisquer direitos de defesa ou oposição que você
          possa ter em relação a solicitações de terceiros para a divulgação de
          seus dados pessoais, inclusive solicitações feitas por um governo.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          3.4 Afiliadas e Transferência de Propriedade
        </Typography.Title>
        <Typography.Paragraph>
          Se estivermos envolvidos em um processo de falência, fusão, aquisição,
          reorganização ou de venda de ativos, seus dados pessoais poderão ser
          vendidos ou transferidos como parte dessa transação. Esta Política de
          Privacidade será aplicável aos seus dados pessoais conforme sejam
          transferidas à nova entidade. Também podemos divulgar dados pessoais
          sobre você às nossas empresas afiliadas para ajudar a operar nossos
          serviços e os serviços de nossas afiliadas, inclusive a veiculação de
          anúncios.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          3.5 Informações Não Pessoais
        </Typography.Title>
        <Typography.Paragraph></Typography.Paragraph>

        <Typography.Title level={3}>
          Nós compartilhamos ou divulgamos dados não pessoais, por exemplo,
          inagregadas como o número total de vezes em que as pessoas se
          envolveram com um Conteúdo, demografia, o número de usuários que
          clicaram em um link específico ou votaram em uma enquete em um
          Conteúdo (mesmo que apenas uma pessoa o tenha feito), os tópicos sobre
          os quais as pessoas estão interagindo em um local específico, alguns
          interesses inferidos ou relatórios aos anunciantes sobre quantas
          pessoas viram ou clicaram em seus anúncios.
        </Typography.Title>
        <Typography.Paragraph></Typography.Paragraph>

        <Typography.Title>
          4. Gerenciando Suas Informações Pessoais Conosco
        </Typography.Title>
        <Typography.Paragraph>
          Você controla os dados pessoais que você compartilha conosco. Você
          pode acessar ou corrigir esses dados a qualquer momento. Você também
          pode desativar sua conta. Também fornecemos ferramentas para você
          fazer objeção, restringir ou retirar o consentimento, quando
          aplicável, para o uso dos dados que você forneceu a nossos Serviços. E
          fazemos com que os dados que você compartilhou por meio de nossos
          serviços sejam portáteis e fornecemos maneiras fáceis de entrar em
          contato conosco. Observe que, para ajudar a proteger sua privacidade e
          manter a segurança, tomamos medidas para verificar sua identidade
          antes de conceder acesso a suas informações pessoais ou cumprir
          exclusão, portabilidade ou outras solicitações relacionadas.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          4.1 Acessando ou Retificando Seus Dados Pessoais
        </Typography.Title>
        <Typography.Paragraph>
          Se você registrou uma conta em nossos Serviços, nós disponibilizamos a
          você ferramentas e configurações de conta para acessar, corrigir,
          excluir ou modificar os dados pessoais que você nos forneceu e que
          estejam associados à sua conta. Você pode baixar determinadas
          informações da conta, inclusive seus Conteúdos.
        </Typography.Paragraph>

        <Typography.Title level={3}>4.2 Exclusão</Typography.Title>
        <Typography.Paragraph>
          Mantemos os Dados de Registro por 18 meses no máximo. Quando
          desativada, sua conta em nossos Serviços, incluindo seu nome de
          exibição, nome de usuário e perfil público, não serão mais visíveis em
          nossos Serviços, para iOS e para Android. Por até 30 dias após a
          desativação, ainda será possível restaurar a sua conta em nossos
          Serviços, caso ela tenha sido desativada acidentalmente ou
          indevidamente.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Lembre-se de que os mecanismos de busca e outros terceiros ainda podem
          manter cópias de suas informações públicas, como as informações do seu
          perfil de usuário e Conteúdos públicos, mesmo após a exclusão das
          informações dos nossos serviços ou a desativação de sua conta
        </Typography.Paragraph>

        <Typography.Title level={3}>
          4.3 Objeção, Restrição ou Retirada de Consentimento
        </Typography.Title>
        <Typography.Paragraph>
          Quando você está conectado em sua conta em nossos Serviços, você pode
          gerenciar suas configurações de privacidade e outros recursos da conta
          aqui a qualquer momento. Pode demorar um pouco para que as
          configurações de privacidade sejam totalmente refletidas em nossos
          sistemas.
        </Typography.Paragraph>

        <Typography.Title level={3}>4.4 Portabilidade</Typography.Title>
        <Typography.Paragraph>
          Nossa Empresa fornece a você um meio de fazer o download das
          informações que você compartilhou por meio de nossos serviços.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          4.5 Informações ou Assistência Adicionais
        </Typography.Title>
        <Typography.Paragraph>
          Sugestões ou perguntas sobre esta Política de Privacidade? Avise-nos
          entrando em contato conosco ou envie-nos uma mensagem utilizando o
          endereço adequado abaixo.
        </Typography.Paragraph>

        <Typography.Title>Crianças e Nossos Serviços</Typography.Title>
        <Typography.Paragraph>
          Nossos serviços não são direcionados a crianças, e você não pode usar
          nossos serviços se tiver menos de 13 anos de idade. Você também
          precisa ter idade suficiente para consentir com o processamento de
          seus dados pessoais em seu país (em alguns países, podemos permitir
          que seus pais ou responsáveis o façam em seu nome). Você precisa ter
          pelo menos 16 anos de idade para usar o Periscope.
        </Typography.Paragraph>

        <Typography.Title level={3}>
          Nossas Operações Globais e o Privacy Shield
        </Typography.Title>
        <Typography.Paragraph>
          Para oferecer os nossos serviços a você, operamos globalmente. Nos
          casos em que as leis do seu país permitirem, você nos autoriza a
          transferir, armazenar e usar seus dados nos Estados Unidos, na Irlanda
          e em qualquer outro país onde operamos. Em alguns desses países aos
          quais nossa Empresa transfere dados pessoais, a privacidade e as leis
          e regulamentos de proteção de dados com relação a quando as
          autoridades governamentais podem acessar dados podem variar em relação
          àquelas no país em que você vive. Saiba mais sobre nossas operações
          globais e transferência de dados aqui.
        </Typography.Paragraph>

        <Typography.Paragraph>
          Quando transferimos dados pessoais para fora da União Europeia, dos
          países da Associação de Livre Comércio Europeia ou do Reino Unido,
          garantimos um nível adequado de proteção dos direitos dos titulares
          dos dados com base na adequação das leis de proteção de dados do país
          receptor, obrigações contratuais impostas ao receptor dos dados (as
          cláusulas modelo podem ser solicitadas por consulta, conforme descrito
          abaixo), ou princípios de escudo de privacidade UE-EUA e Suíça-EUA.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Quando transferimos dados pessoais para fora da União Europeia, dos
          países da Associação de Livre Comércio Europeia ou do Reino Unido,
          garantimos um nível adequado de proteção dos direitos dos titulares
          dos dados com base na adequação das leis de proteção de dados do país
          receptor, obrigações contratuais impostas ao receptor dos dados (as
          cláusulas modelo podem ser solicitadas por consulta, conforme descrito
          abaixo), ou princípios de escudo de privacidade UE-EUA e Suíça-EUA.
        </Typography.Paragraph>

        <Typography.Paragraph>
          Nossa Empresa está em conformidade com os princípios do Privacy Shield
          entre UE-EUA e Suíça-EUA (os “Princípios”) com relação à coleta, ao
          uso, ao compartilhamento e à retenção de dados pessoais da União
          Europeia, dos países da Associação Europeia de Livre Comércio e do
          Reino Unido, conforme descrito em nossa certificação do UE-EUA Privacy
          Shield e certificação do Suíça-EUA Privacy Shield.
        </Typography.Paragraph>
      </Col>
    </Row>,
  ];
};

export default Privacy;
