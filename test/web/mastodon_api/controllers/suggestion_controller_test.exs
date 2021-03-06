# Pleroma: A lightweight social networking server
# Copyright 息 2017-2020 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.MastodonAPI.SuggestionControllerTest do
  use Pleroma.Web.ConnCase

  alias Pleroma.Config

  setup do: oauth_access(["read"])

  test "returns empty result", %{conn: conn} do
    res =
      conn
      |> get("/api/v1/suggestions")
      |> json_response(200)

    assert res == []
  end
end
