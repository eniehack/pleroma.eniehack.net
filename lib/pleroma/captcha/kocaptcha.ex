defmodule Pleroma.Captcha.Kocaptcha do
  alias Pleroma.Captcha.Service
  @behaviour Service

  @impl Service
  def new() do
    endpoint = Pleroma.Config.get!([__MODULE__, :endpoint])

    case Tesla.get(endpoint <> "/new") do
      {:error, _} ->
        %{error: "Kocaptcha service unavailable"}

      {:ok, res} ->
        json_resp = Poison.decode!(res.body)

        %{
          type: :kocaptcha,
          token: json_resp["token"],
          url: endpoint <> json_resp["url"],
          answer_data: json_resp["md5"]
        }
    end
  end

  @impl Service
  def validate(_token, captcha, answer_data) do
    # Here the token is unsed, because the unencrypted captcha answer is just passed to method
    if not is_nil(captcha) and
         :crypto.hash(:md5, captcha) |> Base.encode16() == String.upcase(answer_data),
       do: :ok,
       else: {:error, "Invalid CAPTCHA"}
  end
end
