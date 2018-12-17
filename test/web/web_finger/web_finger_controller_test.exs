defmodule Pleroma.Web.WebFinger.WebFingerControllerTest do
  use Pleroma.Web.ConnCase

  alias Pleroma.User
  alias Pleroma.Web.WebFinger.WebFingerController

  import Pleroma.Factory
  import ExUnit.CaptureLog
  import Tesla.Mock

  setup do
    mock(fn env -> apply(HttpRequestMock, :request, [env]) end)
    :ok
  end

  test "Webfinger JRD" do
    user = insert(:user)

    response =
      build_conn()
      |> put_req_header("accept", "application/jrd+json")
      |> get("/.well-known/webfinger?resource=acct:#{user.nickname}@localhost")

    assert json_response(response, 200)["subject"] == "acct:#{user.nickname}@localhost"
  end

  test "Webfinger XML" do
    user = insert(:user)

    response =
      build_conn()
      |> put_req_header("accept", "application/xrd+xml")
      |> get("/.well-known/webfinger?resource=acct:#{user.nickname}@localhost")

    assert response(response, 200)
  end

  test "Sends a 400 when resource param is missing" do
    response =
      build_conn()
      |> put_req_header("accept", "application/xrd+xml,application/jrd+json")
      |> get("/.well-known/webfinger")

    assert response(response, 400)
  end
end