import {
  TokenURIUpdated as TokenURIUpdatedEvent,
  AddToWhitelist as AddToWhitelistEvent,
  RemoveFromWhitelist as RemoveFromWhitelistEvent,
  SuperRareV2OwnershipTransferred as SuperRareV2OwnershipTransferredEvent,
  SuperRareV2Transfer as SuperRareV2TransferEvent,
  SuperRareV2Approval as SuperRareV2ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent
} from "../generated/SuperRareV2/SuperRareV2"
import {
  TokenURIUpdated,
  AddToWhitelist,
  RemoveFromWhitelist,
  SuperRareV2OwnershipTransferred,
  SuperRareV2Transfer,
  SuperRareV2Approval,
  ApprovalForAll
} from "../generated/schema"

export function handleTokenURIUpdated(event: TokenURIUpdatedEvent): void {
  let entity = new TokenURIUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._tokenId = event.params._tokenId
  entity._uri = event.params._uri
  entity.save()
}

export function handleAddToWhitelist(event: AddToWhitelistEvent): void {
  let entity = new AddToWhitelist(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._newAddress = event.params._newAddress
  entity.save()
}

export function handleRemoveFromWhitelist(
  event: RemoveFromWhitelistEvent
): void {
  let entity = new RemoveFromWhitelist(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._removedAddress = event.params._removedAddress
  entity.save()
}

export function handleSuperRareV2OwnershipTransferred(
  event: SuperRareV2OwnershipTransferredEvent
): void {
  let entity = new SuperRareV2OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleSuperRareV2Transfer(
  event: SuperRareV2TransferEvent
): void {
  let entity = new SuperRareV2Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleSuperRareV2Approval(
  event: SuperRareV2ApprovalEvent
): void {
  let entity = new SuperRareV2Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}
