.. image:: docs/_static/art/vardaellen.png

Vardaellen is a small, generic Campaign Setting, compliant with the `Open Game License`_ (OGL) and suitable for use with PFRPG, 3.5 edition of the world's oldest fantasy role playing game or similar RPG systems.

You can find the `Campaign Setting itself here <Vardaellen campaign setting_>`_ . Besides the description of the campaign setting, it also contains a reference to the rules itself, including content from 3.5 SRD and PRD.

Below are some technical and legal details behind the whole project and, the most important, how you can help.

Vardaellen's Mission
#####################

 * To build a simple PFRPG Reference and generic Campaign Setting that can be freely used (under the terms of the `Open Game License`_) as:

  * a digital, easy to navigate (if compared to a book), light (if compared to a PDF or some heavy sites) digital reference for regular tabletop games;
  * a safe-to-use reference without the `PFRPG Product Identities`_ (non-free content) that are `allegedly present even on the official PRD`_;
  * a ready-to-use reference for software development, including games (not only by becoming free of Product Identities but also providing data in easy-to-use formats, like json).
 
 Please note that those are "goals", before that point is actually reached there's much work to do - and that is why every help is appreciated.

.. _`PFRPG Product Identities`: http://paizo.com/pathfinderRPG/prd/openGameLicense.html

.. _`allegedly present even on the official PRD`: http://paizo.com/threads/rzs2ut24?PRD-content-licensing-GameMastery-GuidePlanar#4

.. _`Vardaellen campaign setting`: https://lukems.github.io/vardaellen/

.. _OGL: `Open Game License`_

.. _`Open Game License`: https://lukems.github.io/vardaellen/#open-game-license-v1-0a

.. _`file an issue`: https://github.com/LukeMS/vardaellen/issues/new

How you can help
#################

The Vardaellen reference was designed so that anyone willing to help could join the effort.
A wiki format was considered, but keep it legally safe, avoiding dangerous editions, it was discarded as a viable option.
Github, in the other hand:

 * also works as a web-server;
 * takes care of versioning for us;
 * has a bug tracker that can be used by anyone to comment, criticize, suggest corrections or improvements;
 * for those that already know how to use git/github or are willing to learn how to do it, the proccess of *forking, editing and submitting a pull request* allows a large number of people to work together in a organized manner.

So, even if not as trivial as a wiki, Github was considered a better choice to keep things accessible but safe and well documented (version history).

Finally, here's how you can help:
 * `file an issue`_: grammar, typos, divergent interpretation of a rule, broken link, improvements, pretty much every thing you can think of cam be filed as an issue, and should be dealt with by any authorized user (should anyone be interested in officially joining the project);
 * `spread the word`_: if you like the concept/goal of the project and/or know someone who would be interested in using and/or contributing, spread the word and give the project more visibility.

Legal Motivations
#####################

.. _`OGL's official FAQ`: https://www.wizards.com/default.asp?x=d20/oglfaq/20040123f

Pretty much everything happened at `this forum post`_, but I will try to explain here better than I did there.
When the 3.5 SRD was released it created a lot of hype, after all, the rules of the most famous RPG were released to the public under a generous license, the `Open Game License`_.
Before the real problem is presented, a few considerations need to be made. According to the `OGL's official FAQ`_:

 Q: What is "Open Game Content"?
 A: Open Game Content is any material that is distributed using the Open Game License **clearly identified by the publisher as Open Game Content**. Furthermore, **any material that is derived from Open Game Content automatically becomes Open Game Content as well**.
 
 Q: What does "clearly identified" mean? 
 A: It means that the publisher has a burden to use some system to identify Open Game Content to any recipient of that content. Systems which have been used by some publishers include placing Open Game Content in shaded boxes, using a different font, italicizing or bolding the Open Game Content, and segregating all the Open Game Content into specifically designated chapters or appendixes. **Some publishers have released documents that are identified as being comprised completely of Open Game Content** [(and so the SRDs and PRDs were created)].
 "Clearly identified" means that the system should pass the "reasonable person" test; meaning that a reasonable person should be able to determine what portions of a given work are Open Game Content, and which portions are not. If you can't figure out what parts of a given work are Open Game Content, provided you exert a reasonable effort to read and apply the instructions for identification provided by the publisher, then the material isn't Clearly Identified.
 This also applies to software. A reasonable person should be able to look at a piece of software and find and understand the Open Content. We'll make a slight allowance that they may have to take a little more time to understand some things, but they should be able to see and understand all Open Content. See the Software FAQ for more details.[emphasis added]

After 3.5 SRD was released (under the OGL), PFRPG was built upon its base. In the spirit of the OGL, PFRPG released its own version of a SRD, the PRD.
If you take a look at the PRD page about the planes, for instance, 3/4 of it came from the SRD and 1/4 was added by PFRPG's writers.
But, unfortunately, not all of the content there is considered Open Game Content by their publishers and, worst of all, there is no clear distinction about what is and what isn't.
3.5 SRD was **very specific** about what was Open Game Content and what wasn't.
At the beginning of each 3.5 SRD rtf file (the SRD was released as a series of rtf files) they clearly stated:

 "This material is Open Game Content, and is licensed for public use under the terms of the Open Game License v1.0a."

Also, there was a "Legal.rtf" that specifically listed the names that they considered Product Identity (not Open Game Content), like that floating big evil or eye the space-guy who eats brains:
 "The following items are designated Product Identity, as defined in Section 1(e) of the Open Game License Version 1.0a, and are subject to the conditions set forth in Section 7 of the OGL, and are not Open Content: [list of names that cannot be repeated here...].

 All of the rest of the SRD is Open Game Content as described in Section 1(d) of the License."

If you read the `PRD's license`_, however, they use terms such as "proper names (characters, deities, etc.), dialogue, plots, storylines, locations, characters, artworks, and trade dress" to declare Product Identity. It's near as specific as 3.5 SRD was.
Now consider that, back to the page about the Planes as an example, 3/4 of that page contains plot, storylines, locations and characters, from 3.5 SRD and under the OGL, but the other 1/4, the PFRPG part naming the outer planes, etc. could be considered Product Identity, that practically makes the PRD unusable.
So, to deal with that issue, a adaptation of the PRD that removes the Product Identity is required.
And that's what we're trying to achieve here.


.. _`this forum post`: http://paizo.com/threads/rzs2ut24?PRD-content-licensing-GameMastery-GuidePlanar

.. _`PRD's license`: http://paizo.com/pathfinderRPG/prd/openGameLicense.html
.. _`Vardaellen campaign setting`: https://lukems.github.io/vardaellen/