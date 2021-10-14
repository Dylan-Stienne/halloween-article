<template>
  <section class="flex justify-center">
    <article class="w-full max-w-content">
      <h1
        class="
          text-3xl
          font-bold
          mt-10
          mx-2
          dark:mt-5
          text-primary
          dark:text-orange
          transform
          transition-transform
          delay-100
          duration-300
          origin-top-left
          dark:rotate-8
        "
      >
        L'homme mort enfermé dans un mausolée
      </h1>
      <p
        class="
          mt-10
          dark:mt-14
          mx-2
          transform
          transition-transform
          delay-200
          duration-300
          origin-top-left
          dark:rotate-3
          dark:skew-x-3
        "
      >
        Bienvenue sur mon blog amateurs de curiosités !! Grand passionné de
        vieilles histoires non élucidées je vous propose aujourd'hui un cas très
        étrange.. Je suis allé chiné dans une brocante il y a quelques jours et
        j'y ai trouvé ce journal. C'est un article du Daily Murder paru en
        Écosse en 1939 suite à la découverte du corps de Jack Davis, un
        explorateur, dans un mausolée du cimetière de Greyfriars Kirkyard,
        réputé pour être l'un des cimetière les plus hanté de toute l'Ecosse.
        Beaucoup de personnes montrent des traces de griffures, brûlures sur
        leurs bras et jambes après leur visite dans ce cimetière. Un fantôme du
        nom de "The Smiling Ghost" hanterai les lieux et pousserai un rire
        effroyable lorsque quiconque s'approche d'un certain Mausolée. Encore
        aujourd'hui le mystère de cette mort est inexpliquée L'autopsie n'a rien
        donné.. Une légende dit que le fantôme qui hante le cimetière aurait tué
        cet explorateur...
      </p>
      <div class="flex mt-10 dark:mt-8 justify-center xl:justify-start">
        <div class="hidden dark:block">
          <img
            src="@/assets/img/details/toile-1.png"
            class="absolute opacity-10 w-full max-w-3xl transform -translate-x-1/3 translate-y-1/3"
          />
          <img
            src="@/assets/img/details/toile-3.png"
            class="absolute opacity-20 w-full max-w-4xl transform rotate-65 translate-x-full -translate-y-1/4"
          />
        </div>
        <img
          src="@/assets/img/poster.png"
          class="
            w-full
            max-w-2xl
            bg-primary-light
            dark:bg-orange-light
            p-5
            rounded
            transform
            duration-2000
            delay-300
            ease-in-out
            transition-transform
            origin-top-right
            dark:-rotate-45
            dark:animate-custom-article
          "
          @click="$emit('open')"
        />
        <div
          class="
            flex-1
            text-justify
            dark:hidden
            bg-primary-light
            rounded
            p-5
            ml-5
            bg-opacity-20
            hidden
            xl:block
          "
        >
          <h2 class="text-3xl font-bold text-black mb-5">
            DAILY <span class="text-danger">M</span>URDER
          </h2>
          <p>
            Ce dimanche 5 novembre 1939, un corps est retrouvé sans vie dans un
            mausolée dans le cimetière de Greyfriars Kirkyard en Ecosse, réputé
            pour être hanté par un mauvais esprit.
          </p>
          <p>
            Le corps serait celui de Jack Davis, un explorateur réputé pour sa
            passion du spiritisme. D’après sa femme, il était parti en
            exploration pour lever le mystère autour de la légende du “Smiling
            Ghost” qui hanterait le cimetière de Greyfriars Kirkyard.
          </p>
          <p>
            Selon la légende The Smiling Ghost serait un fantôme qui hante le
            cimetière et plus précisément un mausolée, celui d’une femme morte
            dans les années 1930. Plusieurs témoins ont dit y voir une ombre,
            entendre de la musique mais aussi un rire angoissant et strident.
            Personne jusqu’à aujourd’hui n’avait encore pénétré dans ce
            mausolée.
          </p>
          <p>
            Alors, comment Jack Davis est-il mort ? une chute ? un manque
            d’oxygène ? Les causes de sa mort demeurent pour l'heure inconnues.
            Une autopsie doit être pratiquée afin d'identifier les circonstances
            de son décès.
          </p>
          <br />
          <p>
            Pour le moment aucune information n’a été divulguée cela reste un
            cas sans explications. Seul un inspecteur nous a confié qu’il
            s’agirait d’un meurtre…
          </p>
          <br />
          <p class="text-left">
            The Smiling ghost existe-t-il vraiment ? Est-il l’auteur de ce crime
            ?
          </p>
          <p class="text-left">
            Un grand mystère tourne autour de cette affaire...
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {};
</script>
