# Pleroma: A lightweight social networking server
# Copyright 息 2017-2020 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.Metadata.Providers.Provider do
  @callback build_tags(map()) :: list()
end
