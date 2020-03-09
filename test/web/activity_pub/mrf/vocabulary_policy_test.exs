# Pleroma: A lightweight social networking server
# Copyright © 2017-2019 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.ActivityPub.MRF.VocabularyPolicyTest do
  use Pleroma.DataCase

  alias Pleroma.Web.ActivityPub.MRF.VocabularyPolicy

  describe "accept" do
<<<<<<< HEAD
    test "it accepts based on parent activity type" do
      config = Pleroma.Config.get([:mrf_vocabulary, :accept])
=======
    clear_config([:mrf_vocabulary, :accept])

    test "it accepts based on parent activity type" do
>>>>>>> 472e7b796cfeb1445ee1572df414531655b050ce
      Pleroma.Config.put([:mrf_vocabulary, :accept], ["Like"])

      message = %{
        "type" => "Like",
        "object" => "whatever"
      }

      {:ok, ^message} = VocabularyPolicy.filter(message)
<<<<<<< HEAD

      Pleroma.Config.put([:mrf_vocabulary, :accept], config)
    end

    test "it accepts based on child object type" do
      config = Pleroma.Config.get([:mrf_vocabulary, :accept])
=======
    end

    test "it accepts based on child object type" do
>>>>>>> 472e7b796cfeb1445ee1572df414531655b050ce
      Pleroma.Config.put([:mrf_vocabulary, :accept], ["Create", "Note"])

      message = %{
        "type" => "Create",
        "object" => %{
          "type" => "Note",
          "content" => "whatever"
        }
      }

      {:ok, ^message} = VocabularyPolicy.filter(message)
<<<<<<< HEAD

      Pleroma.Config.put([:mrf_vocabulary, :accept], config)
    end

    test "it does not accept disallowed child objects" do
      config = Pleroma.Config.get([:mrf_vocabulary, :accept])
=======
    end

    test "it does not accept disallowed child objects" do
>>>>>>> 472e7b796cfeb1445ee1572df414531655b050ce
      Pleroma.Config.put([:mrf_vocabulary, :accept], ["Create", "Note"])

      message = %{
        "type" => "Create",
        "object" => %{
          "type" => "Article",
          "content" => "whatever"
        }
      }

      {:reject, nil} = VocabularyPolicy.filter(message)
<<<<<<< HEAD

      Pleroma.Config.put([:mrf_vocabulary, :accept], config)
    end

    test "it does not accept disallowed parent types" do
      config = Pleroma.Config.get([:mrf_vocabulary, :accept])
=======
    end

    test "it does not accept disallowed parent types" do
>>>>>>> 472e7b796cfeb1445ee1572df414531655b050ce
      Pleroma.Config.put([:mrf_vocabulary, :accept], ["Announce", "Note"])

      message = %{
        "type" => "Create",
        "object" => %{
          "type" => "Note",
          "content" => "whatever"
        }
      }

      {:reject, nil} = VocabularyPolicy.filter(message)
<<<<<<< HEAD

      Pleroma.Config.put([:mrf_vocabulary, :accept], config)
=======
>>>>>>> 472e7b796cfeb1445ee1572df414531655b050ce
    end
  end

  describe "reject" do
<<<<<<< HEAD
    test "it rejects based on parent activity type" do
      config = Pleroma.Config.get([:mrf_vocabulary, :reject])
=======
    clear_config([:mrf_vocabulary, :reject])

    test "it rejects based on parent activity type" do
>>>>>>> 472e7b796cfeb1445ee1572df414531655b050ce
      Pleroma.Config.put([:mrf_vocabulary, :reject], ["Like"])

      message = %{
        "type" => "Like",
        "object" => "whatever"
      }

      {:reject, nil} = VocabularyPolicy.filter(message)
<<<<<<< HEAD

      Pleroma.Config.put([:mrf_vocabulary, :reject], config)
    end

    test "it rejects based on child object type" do
      config = Pleroma.Config.get([:mrf_vocabulary, :reject])
=======
    end

    test "it rejects based on child object type" do
>>>>>>> 472e7b796cfeb1445ee1572df414531655b050ce
      Pleroma.Config.put([:mrf_vocabulary, :reject], ["Note"])

      message = %{
        "type" => "Create",
        "object" => %{
          "type" => "Note",
          "content" => "whatever"
        }
      }

      {:reject, nil} = VocabularyPolicy.filter(message)
<<<<<<< HEAD

      Pleroma.Config.put([:mrf_vocabulary, :reject], config)
    end

    test "it passes through objects that aren't disallowed" do
      config = Pleroma.Config.get([:mrf_vocabulary, :reject])
=======
    end

    test "it passes through objects that aren't disallowed" do
>>>>>>> 472e7b796cfeb1445ee1572df414531655b050ce
      Pleroma.Config.put([:mrf_vocabulary, :reject], ["Like"])

      message = %{
        "type" => "Announce",
        "object" => "whatever"
      }

      {:ok, ^message} = VocabularyPolicy.filter(message)
<<<<<<< HEAD

      Pleroma.Config.put([:mrf_vocabulary, :reject], config)
=======
>>>>>>> 472e7b796cfeb1445ee1572df414531655b050ce
    end
  end
end
